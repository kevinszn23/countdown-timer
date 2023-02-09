import React from "react";
import { useState, useEffect } from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [inputDate, setInputDate] = useState("January 1, 2023");
  const [date, setDate] = useState(inputDate);
  let interval;
  
  useEffect(() => {
    startTimer();
  }, [date]);


  const startTimer = () => {
    const countDownDate = new Date(date).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const count = countDownDate - now

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
        onSubmit={(e) => {
          e.preventDefault();
          clearInterval(interval);
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
