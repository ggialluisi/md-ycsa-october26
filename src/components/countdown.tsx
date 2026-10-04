"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/lib/event";

type RemainingTime = {
  distance: number;
  days: number;
  hours: number;
  minutes: number;
};

function remaining(): RemainingTime {
  const distance = Math.max(0, new Date(EVENT.registrationDeadline).getTime() - Date.now());
  return {
    distance,
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance / 3600000) % 24),
    minutes: Math.floor((distance / 60000) % 60),
  };
}

export function Countdown() {
  const [time, setTime] = useState<RemainingTime | null>(null);

  useEffect(() => {
    const update = () => setTime(remaining());
    const initialTimer = window.setTimeout(update, 0);
    const interval = window.setInterval(update, 30000);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(interval);
    };
  }, []);

  if (time === null) return <span aria-live="polite">Calculando prazo...</span>;
  if (!time.distance) return <span>Lista encerrada</span>;

  return <span>{time.days}d {time.hours}h {time.minutes}min para fechar a lista</span>;
}
