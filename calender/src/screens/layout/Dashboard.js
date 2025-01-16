import React from "react";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import Calender from "../../components/Calender";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideMenu />
        <div>
            <Calender/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
