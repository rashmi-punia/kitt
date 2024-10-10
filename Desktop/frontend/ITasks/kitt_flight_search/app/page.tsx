import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Location from "@/components/Location";

export default function Home() {
  return (
    <section className="mx-44">
      <div className="flex -space-x-8 items-center *:border-x-2 *:border-dashed *:w-full *:h-[200px]">
        <div />
        <div className="text-3xl pt-28 border-opacity-50">
          Good afternoon,Brian
        </div>
        <div />
      </div>
      <div className="border rounded-lg flex flex-col p-10 gap-6 ">
        <Button variant={"secondary"} className="w-[110px]">
          Flights
        </Button>
        <Location />
        
      </div>
    </section>
  );
}
