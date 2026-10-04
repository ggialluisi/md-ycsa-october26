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

  return <strong className="big-number">{total === null ? "—" : total}</strong>;
}
