import React from "react";
import {useState, useEffect } from "react";

export default function Timer(props) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("February 14,2023").getTime();
        interval = setInterval(()=>{
            const now = new Date().getTime();
            const count = countDownDate - now;

            const timerDays = Math.floor(count / (24 * 60 * 60 * 1000));
            const timerHours = Math.floor((count % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const timerMinutes = Math.floor((count % (60 * 60 * 1000)) / (1000 * 60));
            const timerSeconds = Math.floor((count % (60 * 1000)) / 1000 );

            if  (count < 0) {
                clearInterval(interval);
            } else {
                setDays(timerDays);
                setHours(timerHours);
                setMinutes(timerMinutes);
                setSeconds(timerSeconds);
            }
        })
    } 

    useEffect( ()=> {
        startTimer();
    }, [])

    return (
        <div>
            <p>{days} days</p>
            <p>{hours} hours</p>
            <p>{minutes} minutes</p>
            <p>{seconds} seconds</p>
        </div>
    );
}