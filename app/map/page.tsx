"use client";

import { useAppContext } from "@/providers/app.provider";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function ProgressPage() {
  const appContext = useAppContext();

  return (
    <>
      <Map locations={appContext.locations} />
    </>
  );
}
