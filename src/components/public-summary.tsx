"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";

export function PublicSummary() {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    api.getPublicSummary()
      .then((data) => setTotal(data.totalPeople))
      .catch(() => setTotal(null));
  }, []);

  const playfulTotal = total === null ? null : total + 700;

  return (
    <div className="public-total">
      <strong className="big-number">{playfulTotal === null ? "—" : playfulTotal}</strong>
      <small className="minus-seven-hundred">menos setecentas</small>
    </div>
  );
}
