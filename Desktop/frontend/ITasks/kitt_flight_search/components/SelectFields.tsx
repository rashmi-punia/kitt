import * as React from "react";

import { ChevronDown } from "lucide-react";
import { airports } from "@/constants/json";

interface SelectProps {
  label : string;
  icon : React.ReactNode;

}

export function SelectDemo({label,icon} :  SelectProps) {
  const [selectedCity,setSelectedCity] = React.useState<string | undefined>(undefined);
    const [isOpen, setIsOpen] = React.useState(false);
    const divRef = React.useRef<HTMLDivElement>(null);
    
    
  const handleChange= (city:string)=>{
    setSelectedCity(city);
    setIsOpen(false);
  }
  
      React.useEffect(()=>{
        const handleOutsideClick =(e : MouseEvent)=>{
  
          if(divRef && !divRef.current?.contains(e.target as Node)){
            setIsOpen(false);
          }
        }
  
        document.addEventListener('mousedown',handleOutsideClick)
  
        return()=> {
          document.removeEventListener('mousedown',handleOutsideClick);
        }
      },[]);
  return (
    <div ref={divRef} className="relative w-[250px]">
      <button
        onClick={() => setIsOpen(true)}
        className="flex w-full items-center space-x-2 border border-zinc-200 bg-white h-14  p-3  rounded-md text-sm ring-offset-white focus:outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-offset-2 "
      >
        <span>{icon}</span>
        <span className="flex-1 text-start">{selectedCity || label}</span>
        <ChevronDown className="size-5 " />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md border border-zinc-200 bg-white shadow-lg z-10 max-h-60 overflow-y-auto  ">

          {airports.map((airport, i) => (
             <button
               key={i}
               onClick={() => handleChange(airport.city)}
               className="flex w-full items-center justify-between gap-2 px-4 py-2 text-left hover:bg-zinc-100"
             >
               <div className="flex flex-col items-start">
                 <span>{airport.city}</span>
                 <span className="text-gray-500 text-xs">{airport.country}</span>
               </div>
               <span>{airport.code}</span>
             </button>
           ))}
        </div>

      )}
    </div>
    // <Select>
    //   <SelectTrigger className="w-[380px] flex items-center">
    //     <div className="flex items-center space-x-2">
    //       {icon && <span>{icon}</span>}
    //       <SelectValue placeholder={label} />
    //     </div>

    //     {showChevronIcon && (
    //         <ChevronDown className="h-4 w-4 opacity-50 float-right" />
    //     )}
    //   </SelectTrigger>
    //   {airports && (
    //     <SelectContent>
    //       <SelectGroup>
    //         <SelectLabel>{airports[0].city}</SelectLabel>
    //         {airports.map((item, i) => (
    //           <SelectItem value={item.city}>
    //             <div className="flex w-full items-center justify-between gap-2">
    //               <div className="flex flex-col items-start ">
    //                 <p>{item.city}</p>
    //                 <p className="text-gray-500">{item.country}</p>
    //               </div>
    //               <p>{item.code}</p>
    //             </div>
    //           </SelectItem>
    //         ))}
    //       </SelectGroup>
    //     </SelectContent>
    //   )}
    // </Select>
  );
}
