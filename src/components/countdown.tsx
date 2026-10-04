"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/lib/event";

function remaining() {
  const distance = Math.max(0, new Date(EVENT.registrationDeadline).getTime() - Date.now());
  return {
    distance,
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance / 3600000) % 24),
    minutes: Math.floor((distance / 60000) % 60),
  };
}

export function Countdown() {
  const [time, setTime] = useState(remaining());

  useEffect(() => {
    const timer = window.setInterval(() => setTime(remaining()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  if (!time.distance) return <span>Lista encerrada</span>;

  return <span>{time.days}d {time.hours}h {time.minutes}min para fechar a lista</span>;
}
