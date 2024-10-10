"use client";

import React, { useEffect, useRef, useState } from "react";
import { SelectDemo } from "./SelectFields";
import { BiTargetLock } from "react-icons/bi";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { Button } from "./ui/button";
import { FiCalendar } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { Calendar } from "./ui/calendar";

const Location = () => {

    const [departureDate, setDepartureDate] = useState<Date | undefined>(new Date());
    const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
    const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
    const [showReturnCalendar, setShowReturnCalendar] = useState(false);


    const departureRef = useRef<HTMLDivElement>(null);
    const returnRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
      const handleOutsideClose = (e: MouseEvent)=>{
        if(
          departureRef.current && !departureRef.current.contains(e.target as Node) && returnRef.current && !returnRef.current.contains(e.target as Node)
        ){
          setShowDepartureCalendar(false);
          setShowReturnCalendar(false);
        }
      };

      document.addEventListener('mousedown', handleOutsideClose);
      return () => {
        document.removeEventListener('mousedown',handleOutsideClose);

      }
    },[]);


  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-between gap-4">
        <SelectDemo
          label="Where From?"
          icon={<BiTargetLock className="size-5" />}
        />
        <Button variant={"secondary"} className="rounded-full py-7">
          <TbArrowsDoubleSwNe className="size-5 rotate-45" />
        </Button>
        <SelectDemo
          label="Where To?"
          icon={<BiTargetLock className="size-5" />}
        />
        <div
          ref={departureRef}
          onClick={() => {
            setShowDepartureCalendar((prev) => !prev);
            setShowReturnCalendar(false);
          }}
          className="flex relative h-14 gap-2 items-center rounded-md border border-zinc-200 bg-white px-3 w-[300px] py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300">
          <FiCalendar />
          <span>Departure</span>
          {showDepartureCalendar && (
            <div className="absolute top-14 left-0 bg-white z-10">
              <Calendar
                mode="single"
                selected={departureDate}
                onSelect={setDepartureDate}
                className="rounded-md border"
              />
            </div>
          )}
        </div>
        <div
          ref={returnRef}
          onClick={() => {
            setShowReturnCalendar((prev) => !prev);
            setShowDepartureCalendar(false); 
          }}
          className="flex relative h-14 gap-2 items-center rounded-md border border-zinc-200 bg-white px-3 w-[300px] py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300
"
        >
          <FiCalendar />
          <span>Return</span>
          {showReturnCalendar && (
            <div className="absolute top-14 right-0 z-10 bg-white">
              <Calendar
                mode="single"
                selected={returnDate}
                onSelect={setReturnDate}
                className="rounded-md border"
                // onClose={() => setShowReturnCalendar(false)} // Close when selecting a date
              />
            </div>
          )}
        </div>
      </div>
      <Link href={"/loading"} className="self-end">
        <Button size={"lg"} className="w-[200px] bg-green-900">
          <CiSearch className="mx-2 size-5" />
          Search Flights
        </Button>
      </Link>
    </div>
  );
};

export default Location;
