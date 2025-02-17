import {MonthsEnum} from "@/globals/months";
import {Clock9} from "lucide-react";
import {useEffect, useState} from "react";
import {IoCalendarOutline} from "react-icons/io5";

export default function TimeComponent() {
  const [time, setTime] = useState<string>("");
  const [day, setDay] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const time = date.toLocaleTimeString();
      setTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      setDay(`${day}-${MonthsEnum[month - 1]?.abbr?.en}-${year}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-start-5 col-span-3 my-input grid grid-cols-2 bg-light rounded-full px-2">
      <div className="flex items-center justify-center">
        <Clock9 color="var(--primary)" size={20} className="mr-2" />
        {time}
      </div>
      <div className="flex items-center justify-center">
        <IoCalendarOutline color="var(--primary)" size={20} className="mr-2" />
        {day}
      </div>
    </div>
  );
}
