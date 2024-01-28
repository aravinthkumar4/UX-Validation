import React from "react";
import Sidebar from "../../../Components/Sidebar";
import Modal from "../../../Components/Modal";

function Dashboard() {
  return (
    <div>
      <Sidebar popup={<Modal/>} />
    </div>
  );
}

export default Dashboard;
export { Dashboard };
