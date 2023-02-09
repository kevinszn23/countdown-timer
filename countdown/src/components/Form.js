import React from "react";
import { useState, useEffect } from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [inputDate, setInputDate] = useState("Jan 1, 2023");
  const [date, setDate] = useState(inputDate);
  
  useEffect(() => {
    startTimer();
  }, []);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("February 14, 2023")
    interval = setInterval(() => {
      const now = new Date()
      const count = (countDownDate - now) / 1000

      const timerDays = Math.floor(count / (24 * 60 * 60 * 1000));
      const timerHours = Math.floor(
        (count % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const timerMinutes = Math.floor((count % (60 * 60 * 1000)) / (1000 * 60));
      const timerSeconds = Math.floor((count % (60 * 1000)) / 1000);

      if (count < 0) {
        clearInterval(interval);
      } else {
        setDays(timerDays);
        setHours(timerHours);
        setMinutes(timerMinutes);
        setSeconds(timerSeconds);
      }
    });
  };
  return (
    <div>
      <form
        onSubmit={() => {
          setDate(inputDate);
        //   console.log(date);
        }}
      >
        <label>
          <span>Name</span>
          <input
            type="text"
            required
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <span>Date</span>
          <input
            type="text"
            required
            name="date"
            value={inputDate}
            onChange={(e) => {
              setInputDate(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="submit" />

        <div>
          <p>{days} days</p>
          <p>{hours} hours</p>
          <p>{minutes} minutes</p>
          <p>{seconds} seconds</p>
          <p>{date}</p>
        </div>
      </form>
    </div>
  );
}
