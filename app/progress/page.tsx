"use client";

import { startProgress } from "@/core/signalRService";
import { useAppContext } from "@/providers/app.provider";
import { Button } from "@nextui-org/button";
import { Progress } from "@nextui-org/progress";

export default function ProgressPage() {
  const appContext = useAppContext();

  return (
    <>
      <Progress
        size="md"
        color="primary"
        showValueLabel={true}
        className="max-w-md"
        value={appContext.progress}
      />
      <Button className="mt-5" onClick={() => startProgress()}>
        Start Long Running Process
      </Button>
    </>
  );
}
