export const airports = [
    {
      "name": "Indira Gandhi International Airport",
      "code": "DEL",
      "city": "New Delhi",
      "country": "India"
    },
    {
      "name": "Chhatrapati Shivaji Maharaj International Airport",
      "code": "BOM",
      "city": "Mumbai",
      "country": "India"
    },
    {
      "name": "John F. Kennedy International Airport",
      "code": "JFK",
      "city": "New York",
      "country": "United States"
    },
    {
      "name": "Dubai International Airport",
      "code": "DXB",
      "city": "Dubai",
      "country": "United Arab Emirates"
    },
    {
      "name": "Heathrow Airport",
      "code": "LHR",
      "city": "London",
      "country": "United Kingdom"
    },
    {
      "name": "Singapore Changi Airport",
      "code": "SIN",
      "city": "Singapore",
      "country": "Singapore"
    },
    {
      "name": "Los Angeles International Airport",
      "code": "LAX",
      "city": "Los Angeles",
      "country": "United States"
    },
    {
      "name": "Beijing Capital International Airport",
      "code": "PEK",
      "city": "Beijing",
      "country": "China"
    },
    {
      "name": "Sydney Kingsford Smith International Airport",
      "code": "SYD",
      "city": "Sydney",
      "country": "Australia"
    },
    {
      "name": "Tokyo Haneda Airport",
      "code": "HND",
      "city": "Tokyo",
      "country": "Japan"
    }
  ]


  export const dummyTickets = [
    {
      id: 1,
      price: "2,684.80",
      depature: {
        Date: "",
        City: "Emirates",
        number: "AT 4343",
        flightCode: "CDG - DXB",
        timing: "9:44AM - 11:56PM",
        duration: "2h 10min",
        stops: "Non Stop",
        image: "/imageD.png",
      },

      return: {
        Date: "",
        City: "lutahrasa",
        number: "AV 4343",
        flightCode: "DAG - FGB",
        timing: "11:44AM - 1:56PM",
        duration: "4h 10min",
        stops: "2 Stops",
        image: "/image 2.png",
      },
    },
    {
      id: 2,
      price: "2,684.80",
      depature: {
        Date: "Thu 25 Jan",
        City: "Emirates",
        number: "AT 4343",
        flightCode: "CDG - DXB",
        timing: "9:44AM - 11:56PM",
        duration: "2h 10min",
        stops: "Non Stop",
        image: "/imageD.png",
      },

      return: {
        Date: "Sat 6 Jul",
        City: "lutahrasa",
        number: "AV 4343",
        flightCode: "DAG - FGB",
        timing: "11:44AM - 1:56PM",
        duration: "4h 10min",
        stops: "2 Stops",
        image: "/image 2.png",
      },
    },
    {
      id: 1,
      price: "2,684.80",
      depature: {
        Date: "Sat 6 Jul",
        City: "Emirates",
        number: "AT 4343",
        flightCode: "CDG - DXB",
        timing: "9:44AM - 11:56PM",
        duration: "2h 10min",
        stops: "Non Stop",
        image: "/imageD.png",
      },

      return: {
        Date: "Sat 6 Jul",
        City: "lutahrasa",
        number: "AV 4343",
        flightCode: "DAG - FGB",
        timing: "11:44AM - 1:56PM",
        duration: "4h 10min",
        stops: "2 Stops",
        image: "/image 2.png",
      },
    },
    {
      id: 1,
      price: "2,684.80",
      depature: {
        Date: "Sat 6 Jul",
        City: "Emirates",
        number: "AT 4343",
        flightCode: "CDG - DXB",
        timing: "9:44AM - 11:56PM",
        duration: "2h 10min",
        stops: "Non Stop",
        image: "/imageD.png",
      },

      return: {
        Date: "Sat 6 Jul",
        City: "lutahrasa",
        number: "AV 4343",
        flightCode: "DAG - FGB",
        timing: "11:44AM - 1:56PM",
        duration: "4h 10min",
        stops: "2 Stops",
        image: "/image 2.png",
      },
    },
  ];

export interface FlightDetails {
  Date: string;
  City: string;
  number: string;
  flightCode: string;
  timing: string;
  duration: string;
  stops: string;
  image: string;
}

export interface Ticket {
  id: number;
  price: string;
  depature: FlightDetails; 
  return: FlightDetails;
}
