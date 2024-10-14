"use client";
import { useEffect } from "react";
import { startSignalRConnection } from "@/core/signalRService";
import { useAppContext } from "./app.provider";

const SignalRProvider = () => {
  const app = useAppContext();
  useEffect(() => {
    startSignalRConnection(app.setProgress);
  }, []);
  return null;
};
export default SignalRProvider;
