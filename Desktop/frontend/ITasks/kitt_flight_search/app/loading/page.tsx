"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";
import { PiSpinner, PiSpinnerGapLight } from "react-icons/pi";
import { BiCheckCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Location from "@/components/Location";
import TicketCardskeleton from "@/components/TicketCardskeleton";
import { dummyTickets } from "@/constants/json";
import TicketCard from "@/components/TicketCard";
import Link from "next/link";

const skeletionArray = new Array(8).fill({});
const steps = [
  "Searching 400+ flights.",
  "Attaching Comapny rules",
  "serving best results.",
];

const page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openLocationForm, setOpenLocationForm] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const router = useRouter();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loading_timeline = setTimeout(() => {
      setLoading(false);
    }, 9000);

    const handleOutsideClick = (e: MouseEvent) => {
      if (divRef && !divRef.current?.contains(e.target as Node)) {
        setOpenLocationForm(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      clearTimeout(loading_timeline);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  if (!loading) {
    router.push("");
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStep < 3) {
        setCurrentStep((prev) => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [currentStep]);

  const renderSteps = (index: number) => {
    if (currentStep < index) {
      return <PiSpinner className="invisible size-5" />;
    } else if (currentStep === index) {
      return (
        <div>
          <PiSpinner className="size-5 " />
        </div>
      );
    } else {
      return (
        <div>
          <BiCheckCircle className="size-5 text-green-500 " />
        </div>
      );
    }
  };

  return (
    <section className="relative">
      {openLocationForm && (
        <motion.div
          ref={divRef}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring" }}
          className="absolute  z-20 border-b-2 top-0 w-full  bg-white p-8 flex justify-center"
        >
          <Location />
        </motion.div>
      )}

      <div className="flex border-b-2 justify-between items-center px-36 py-6">
        <div
          onClick={() => setOpenLocationForm(true)}
          className="max-w-[870px] rounded-full border p-2 flex divide-x-2 gap-2 *:p-2 *:truncate"
        >
          <h2>
            <span className="font-bold">OGT</span>
            <span> Paris nrekjnkjrejk rencvkejnknejfn nkn kcnekj</span>
          </h2>
          <h2>
            <span className="font-bold">OGT</span>
            <span> Paris nrekjnkjrejk rencvkejnknejfn nkn kcnekj</span>
          </h2>
          <h2>
            <span className="font-bold">OGT</span>
            <span> Paris nrekjnkjrejk rencvkejnknejfn nkn kcnekj</span>
          </h2>
          <Button variant={"secondary"} className="rounded-full w-[50px]">
            <CiSearch className="size-6" />
          </Button>
        </div>
        <Link href="/">
          <Button variant={"outline"} className="rounded-full p-1.5">
            <IoClose className="size-6" />
          </Button>
        </Link>
      </div>
        {loading && (
      <div className="relative w-full h-1 bg-gray-200 overflow-hidden ">
          <motion.span
            initial={{ x: "0%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              ease: "linear",
              repeat: Infinity,
            }}
            className="absolute h-full w-full bg-blue-500 animate-pulse "
          ></motion.span>
      </div>
        )}
      <div className="flex flex-col gap-3">
        {loading ? (
          <React.Fragment>
            {skeletionArray.map((_, index) => (
              <TicketCardskeleton />
            ))}

            <div className="absolute left-[40%] p-4 w-[300px]  top-48 bg-white border rounded-2xl">
              <Image
                src={"/gif.png"}
                width={200}
                height={50}
                alt="gif"
                className="mx-auto"
              />
              <div className={`*:flex  *:gap-4 `}>
                <div className=" *:flex *:items-center flex flex-col gap-3 *:gap-4  ">
                  {steps.map((name, index) => (
                    <div>
                      {renderSteps(index)}
                      <p
                        className={` ${
                          currentStep < index
                            ? " text-gray-500 "
                            : "text-gray-950"
                        }  capitalize `}
                      >
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <div className="mx-36 my-12 flex flex-col gap-2">
            <span className="text-zinc-500 text-lg">
              Showing 365 of 767 results.
            </span>
            {dummyTickets.map((ticket, i) => (
              <TicketCard ticket={ticket} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default page;
