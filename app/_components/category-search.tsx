import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const CategorySearch = () => {
  return (
    <div className="mb-10 flex flex-col items-center gap-2">
      <h2 className="font-bold text-4xl tracking-wide">
        Buscar <span className="text-primary">Doctores</span>
      </h2>
      <h2 className="text-gray-500 text-xl">
        Buscar tu Doctor y Reserva una Cita en un click
      </h2>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Buscar..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default CategorySearch;
