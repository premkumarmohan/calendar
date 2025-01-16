import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";


const SideMenu = () =>{
  const [academic, setAcademic] = useState(true);
  const [scheduleEvent, setSchedule] = useState([
    { id: 1, name: "event 1", isSelected: true },
    { id: 2, name: "event 2", isSelected: true },
    { id: 3, name: "event 3", isSelected: true },
    { id: 4, name: "event 4", isSelected: true },
    { id: 5, name: "event 5", isSelected: false },
  ]);

  const [upcomingEvent, setUpcomingEvent] = useState([
    {
      id: 1,
      name: "event 1",
      description: "description",
      time: "10.00 am",
      url: "https://picsum.photos/seed/picsum/200",
    },
    {
      id: 2,
      name: "event 2",
      description: "description",
      time: "10.00 am",
      url: "https://picsum.photos/seed/picsum/200",
    },
    {
      id: 3,
      name: "event 3",
      description: "description",
      time: "10.00 am",
      url: "https://picsum.photos/seed/picsum/200",
    },
    {
      id: 4,
      name: "event 4",
      description: "description",
      time: "10.00 am",
      url: "https://picsum.photos/seed/picsum/200",
    },
    {
      id: 5,
      name: "event 5",
      description: "description",
      time: "10.00 am",
      url: "https://picsum.photos/seed/picsum/200",
    },
  ]);

  const accentColor = [
    "accent-green-800",
    "accent-orange-500",
    "accent-gray-700",
    "accent-red-800	",
    "accent-yellow-600",
  ];

  const handleSchedule = (id) => {
    const newSchedule = scheduleEvent.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: !item.isSelected };
      } else {
        return item;
      }
    });

    setSchedule(newSchedule);

    // setSchedule([...scheduleEvent,result])
  };
  return (
    <div className="p-4 lg:inline-block hidden">
      <div className="rounded-lg bg-zinc-100 text-gray-500 min-h-[50vh] min-w-[13vw] max-w-[13vw] w-full px-2 py-4">
        <ul className="font-semibold">
          <li className="flex space-x-4 items-center font-semibold py-2">
            {" "}
            <HiOutlineHome /> <span>Home</span>{" "}
          </li>
          <li className="py-2">
            <div
              className="flex space-x-4 justify-between items-center"
              role="button"
              onClick={() => setAcademic(!academic)}
            >
              <div className="flex space-x-4 items-center">
                <HiOutlineAcademicCap /> <span>Academic</span>
              </div>
              <div>
                {academic ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}{" "}
              </div>
            </div>
            <div className={academic ? "flex justify-center" : "hidden"}>
              <ul>
                <li className="py-2 px-2 text-sky-500 bg-sky-100 bg-opacity-40 rounded-lg">
                  {" "}
                  - Academic Calender
                </li>
                <li className="py-2 px-2"> - My Calender</li>
              </ul>
            </div>
          </li>
          {scheduleEvent && (
            <li>
              <h4> My Schedule </h4>
              <ul className="px-6">
                {scheduleEvent.map((item, index) => {
                  return (
                    <li className="capitalize py-1" key={item.id}>
                      {" "}
                      <input
                        className={accentColor[index]}
                        type="checkbox"
                        id={item.name.replaceAll(" ", "-")}
                        checked={item.isSelected}
                        onClick={() => handleSchedule(item.id)}
                      />{" "}
                      <label className="font-normal text-sm  pl-2 cursor-pointer" htmlFor={item.name.replaceAll(" ", "-")}>
                        {item.name}{" "}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </li>
          )}
          {upcomingEvent && (
            <li>
              <h4> Upcoming Event </h4>
              <ul className="">
                {upcomingEvent.map((item, index) => {
                  return (
                    <li className="capitalize py-1" key={item.id}>
                      <div className="flex bg-white p-2 rounded-lg">
                        <div className="flex space-x-2 items-center">
                          <img
                            src={item.url} alt={item.name}
                            className="w-[40px] h-[40px] rounded-lg"
                          />
                          <div className="">
                            <p className="text-sm">{item.name}</p>
                            <ol className="flex space-x-2 mx-0 items-center text-[11px] font-normal list-disc list-inside">
                              <li className="m-0">{item.description}</li>{" "}
                              <li>{item.time}</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
