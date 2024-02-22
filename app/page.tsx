import CategorySearch from "./_components/category-search";
import DoctorList from "./_components/doctor-list";
import Hero from "./_components/hero";

export default async function Home() {
  return (
    <>
      <Hero />
      <CategorySearch />
      <DoctorList />
    </>
  );
}
