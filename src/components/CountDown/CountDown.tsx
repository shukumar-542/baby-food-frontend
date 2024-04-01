"use client"

import { useEffect, useState } from "react";

const CountDown = () => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const deadline = "April, 25, 2024";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now()
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHours(Math.floor(time / (1000 * 60 * 60) % 24))
        setMinutes(Math.floor((time / 1000 / 60) % 60))
        setSeconds(Math.floor((time / 1000) % 60))
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(), 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className="border border-gray-300 rounded-2xl shadow-md w-[300px] mx-auto">
            <h1 className="mt-2 font-serif text-xl">Remaining Flash Sale</h1>
            <div className="flex items-center  gap-5 justify-center  p-4   ">

                <div >
                    <h1 className="bg-[#EF4A23] text-white shadow-md rounded-md">{days >= 10 ? days : '0' + days}</h1>
                    <p className="text-sm px-1">Days</p>
                </div>
                <div>
                    <h1 className="bg-[#EF4A23] text-white shadow-md rounded-md">{hours >= 10 ? hours : '0' + hours}</h1>
                    <p>Hours</p>
                </div>
                <div>
                    <h1 className="bg-[#EF4A23] text-white shadow-md rounded-md">{minutes >= 10 ? minutes : '0' + minutes}</h1>
                    <p>Minutes</p>
                </div>
                <div>
                    <h1 className="bg-[#EF4A23] text-white shadow-md rounded-md">{seconds >= 10 ? seconds : '0' + seconds}</h1>
                    <p>Seconds</p>

                </div>
            </div>
        </div>
    );
};

export default CountDown;