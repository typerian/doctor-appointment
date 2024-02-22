import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const menu = [
    { id: 1, name: "Inicio", path: "/" },
    { id: 1, name: "Explorar", path: "/explorer" },
    { id: 1, name: "Contáctanos", path: "/contact" },
  ];
  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src={"./logo.svg"} alt="" width={180} height={80} />
        <ul className="md:flex hidden gap-8">
          {menu.map((item) => (
            <Link href={item.path}>
              <li
                key={item.id}
                className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out"
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
