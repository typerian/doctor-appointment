import { getSpecialty } from "@/actions/specialty";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategorySearch = async () => {
  const specialties = await getSpecialty();
  return (
    <div className="mb-10 items-center px-5 flex flex-col gap-2">
      <h2
        className="font-bold
        text-4xl tracking-wide"
      >
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-gray-500 text-xl">
        Search Your Doctor and Book Appointment in one click
      </h2>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Display List of Category  */}
      <div className="grid grid-cols-3 mt-5 md:grid-cols-4">
        {specialties.length > 0
          ? specialties.map((item, index) => (
              <Link
                href={"/search/" + item.name}
                key={index}
                className="flex 
          flex-col text-center items-center
          p-5 bg-blue-50 m-2 rounded-lg cursor-pointer
          gap-2 hover:scale-110 transition-all ease-in-out"
              >
                <Image
                  src={"/specialty/" + item.name + ".png"}
                  alt="icon"
                  width={50}
                  height={50}
                />
                <label className="text-blue-600 text-sm">{item.name}</label>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={item}
                className=" bg-slate-200 m-2
       w-[130px] h-[120px] rounded-lg animate-pulse"
              />
            ))}
      </div>
    </div>
  );
};

export default CategorySearch;
