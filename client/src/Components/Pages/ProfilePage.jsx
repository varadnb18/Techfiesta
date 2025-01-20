import React from "react";
import SideBar from "../SideBar/SideBar";
import StreakCalendar from "../Calendar/StreakCalendar";

function ProfilePage() {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <div>
        <SideBar />
      </div>
      <div className="p-4 overflow-auto">
        <StreakCalendar />
      </div>
    </div>
  );
}

export default ProfilePage;
