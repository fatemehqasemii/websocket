"use client";
import { useEffect } from "react";
import { startSignalRConnection } from "@/core/signalRService";

const SignalRProvider = () => {
  useEffect(() => {
    startSignalRConnection();
  }, []);
  return null;
};
export default SignalRProvider;
