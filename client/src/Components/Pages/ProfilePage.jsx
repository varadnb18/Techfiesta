import React from "react";
import StreakCalendar from "../Calendar/StreakCalendar";
import Title from "../UI/Title";

function ProfilePage() {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <div>{/* <Title /> */}</div>
      <div className="p-4 overflow-auto">
        <StreakCalendar />
      </div>
    </div>
  );
}

export default ProfilePage;
