"use client";
import { startTracking } from "@/core/signalRService";
import { useEffect } from "react";

export default function MapPage() {
  useEffect(() => {
    startTracking();
  }, []);
  return <>lo</>;
}
