"use client";
import { getSpecialty } from "@/actions/specialty";
import React, { ReactNode, ReactPortal, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ImageUpload from "@/app/_components/image-upload";

type SpecialtyType = {
  id: number;
  name: string | null;
}[];

const CreatePage = () => {
  const gender = ["male", "female"] as const;
  const hours = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ] as const;

  const Schema = z
    .object({
      first_name: z.string().min(2),
      last_name: z.string().min(2),
      address: z.string().min(10),
      biography: z.string().min(500),
      phone: z.string().min(11),
      age: z.coerce.number().positive(),
      patients_number: z.coerce.number().positive(),
      specialty_id: z.coerce.number(),
      year_of_experience: z.coerce.number().positive(),
      gender: z.enum(gender),
      end_time: z.enum(hours),
      start_time: z.enum(hours),
    })
    .required();

  const [specialties, setSpecialties] = useState<SpecialtyType>();
  const [urlImage, setUrlImage] = useState<string | undefined>("");

  const fetchSpecialty = async () => {
    const data = await getSpecialty();
    setSpecialties(data);
  };

  useEffect(() => {
    fetchSpecialty();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Schema),
  });

  const onSubmit = (data: any) => {
    if (!urlImage) return alert("Sube una fotografia");
    console.log({ ...data, urlImage });
  };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="" htmlFor="first_name">
                    Nombre
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="John"
                    {...register("first_name")}
                  />
                  <p>{errors.first_name?.message as ReactNode}</p>
                </div>

                <div>
                  <label className="" htmlFor="last_name">
                    Apellido
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Wick"
                    {...register("last_name")}
                  />
                  <p>{errors.last_name?.message as ReactNode}</p>
                </div>

                <div>
                  <label className="" htmlFor="phone">
                    Telefono
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="000000000"
                    {...register("phone")}
                  />
                  <p>{errors.phone?.message as ReactNode}</p>
                </div>

                <div>
                  <label className="" htmlFor="address">
                    Ubicación
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Av. Road Hill, street #2"
                    {...register("address")}
                  />
                  <p>{errors.address?.message as ReactNode}</p>
                </div>

                <div>
                  <label className="" htmlFor="age">
                    Edad
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    {...register("age")}
                  />
                  <p>{errors.age?.message as ReactNode}</p>
                </div>

                <div>
                  <label className="" htmlFor="patients_number">
                    Número de Pacientes
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    {...register("patients_number")}
                  />
                  <p>{errors.patients_number?.message as ReactNode}</p>
                </div>
                <div>
                  <label className="" htmlFor="start_time">
                    Hora de ingreso
                  </label>
                  <input
                    type="time"
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    {...register("start_time")}
                  />
                  <p>{errors.start_time?.message as ReactNode}</p>
                </div>
                <div>
                  <label className="" htmlFor="end_time">
                    Hora de salida
                  </label>
                  <input
                    type="time"
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    {...register("end_time")}
                  />
                  <p>{errors.end_time?.message as ReactNode}</p>
                </div>

                <div>
                  <label className="" htmlFor="specialty">
                    Elegir especialidad
                  </label>
                  <select
                    className="p-3 rounded-md text-center w-full"
                    {...register("specialty_id")}
                  >
                    <option disabled selected>
                      Seleccione
                    </option>
                    {specialties?.map((special) => (
                      <option key={special.id} value={special.id}>
                        {special.name}
                      </option>
                    ))}
                  </select>
                  <p>{errors.specialty_id?.message as ReactNode}</p>
                </div>

                <div>
                  <label className="" htmlFor="gender">
                    Sexo
                  </label>
                  <select
                    className="p-3 rounded-md text-center w-full"
                    {...register("gender")}
                  >
                    <option disabled selected>
                      Seleccione
                    </option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                  </select>
                  <p>{errors.gender?.message as ReactNode}</p>
                </div>

                <div>
                  <label className="" htmlFor="year_of_experience">
                    Año de Experiencia
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    {...register("year_of_experience")}
                  />
                  <p>{errors.year_of_experience?.message as ReactNode}</p>
                </div>

                <ImageUpload url={urlImage} setUrl={setUrlImage} />
              </div>

              <div>
                <label className="" htmlFor="biography">
                  Biografía
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="biography"
                  rows={8}
                  id="biography"
                  {...register("biography")}
                ></textarea>
                <p>{errors.biography?.message as ReactNode}</p>
              </div>

              <button className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                Completar Registro
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePage;
