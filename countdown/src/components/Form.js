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
  const [inputTime, setInputTime] = useState("");

  const countDownDate = new Date(date).getTime()
  const now = new Date().getTime()
  const count = countDownDate - now

  let interval;

  useEffect(() => {
    clearInterval(interval);
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    startTimer();
  }, [date]);

  const startTimer = () => {
    clearInterval(interval)
    const countDownDate = new Date(date).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const count = countDownDate - now;

      const timerDays = Math.floor(count / (24 * 60 * 60 * 1000));
      const timerHours = Math.floor(
        (count % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const timerMinutes = Math.floor((count % (60 * 60 * 1000)) / (1000 * 60));
      const timerSeconds = Math.floor((count % (60 * 1000)) / 1000);


      if (countDownDate !== new Date(date).getTime()) {
        clearInterval(interval)
      }

      if (count < 0) {
        clearInterval(interval);
        alert("TIMES UP BABY")
      } else {
        setDays(timerDays);
        setHours(timerHours);
        setMinutes(timerMinutes);
        setSeconds(timerSeconds);
      }
    });
  };
  return (
    <div className="body">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDays("");
          setHours("");
          setMinutes("");
          setSeconds("");
        //   clearInterval(interval);
          setDate(inputDate + (inputTime === "" ? inputTime : "T" + inputTime) );
        }}
      >

        <div className="timer-class">
          <p>
            {days} <span className="timer-span">days</span>
          </p>
          <p>
            {hours} <span className="timer-span">hours</span>
          </p>
          <p>
            {minutes} <span className="timer-span">minutes</span>
          </p>
          <p>
            {seconds} <span className="timer-span">seconds</span>
          </p>
        </div>

        <div className="timer-event">
          <p>{date === "January 1, 2023" ? "" : `Until ${name}`}</p>
        </div>
        <label>
          <span className="timer-name">Name</span>
          <input
            type="text"
            required
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <span className="timer-date">Date</span>
          <input
            type="date"
            required
            name="date"
            value={inputDate}
            onChange={(e) => {
              setInputDate(e.target.value);
            }}
          />

          <span className="timer-time">Time</span>
          <input
          type="time"
          name="time"
          value={inputTime}
          onChange={(e) => {
            setInputTime(e.target.value);
          }}
          />

        </label>
        <input type="Submit" value="Submit" className="timer-submit" />
        <input type="Reset" value="Reset"/>
      </form>
    </div>
  );
}
