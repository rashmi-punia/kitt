import React from "react";
import { IoArrowBack } from "react-icons/io5";

const TicketDetail = ({
  setShowDetails,
}: {
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <IoArrowBack onClick={() => setShowDetails(false)} />
      <p>Flight Details</p>
    </div>
  );
};

export default TicketDetail;
