"use client";

import { FlightDetails, Ticket } from '@/constants/json'
import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from './ui/button';
import TicketDetail from './TicketDetail';

interface TicketCardProps {
  ticket : Ticket;
  index: number
}

interface ShowContentProps {
  data: FlightDetails;
}

const ShowContent = ({data } : ShowContentProps) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex gap-5">
        <Image src={data.image} width="60" height="40" alt="logo" />
        <div className=" ">
          <ul className="list-disc text-zinc-500 text-sm flex gap-1 list-inside ">
            {data.City}
            <li>{data.number}</li>
          </ul>
          <p>{data.timing}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-zinc-500 text-sm">{data.flightCode}</span>
        <span>{data.duration}</span>
      </div>
      <span>{data.stops}</span>
    </div>
  );
}

const TicketCard = ({ticket,index} : TicketCardProps) => {
  const [showDetails,setShowDetails] = useState<boolean>(true);

  return (
    <div onClick={() => setShowDetails(true)}
      key={index}
      className="border flex gap-5 divide-x-2 justify-between hover:bg-blue-50 hover:-translate-y-0.5 rounded-md p-2"
    >
      <div className="flex-1">
        <ShowContent data={ticket.depature} />
        <ShowContent data={ticket.return} />
      </div>
      <div className="flex flex-col gap-3 items-center p-10 justify-center">
        <p>from AED {ticket.price}</p>
        <Button size={"lg"} className="w-[200px] bg-green-900">
          Search Flights
        </Button>
      </div>

      {
        showDetails && (
          <TicketDetail setShowDetails={setShowDetails} />
        )
      }
    </div>
  );
}

export default TicketCard
