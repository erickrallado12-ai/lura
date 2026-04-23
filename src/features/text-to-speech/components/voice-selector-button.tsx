"use client";

import { ChevronDown } from "lucide-react";
import { useStore } from "@tanstack/react-form";

import { Button } from "@/components/ui/button";
import { DrawerTrigger } from "@/components/ui/drawer";
import { VoiceAvatar } from "@/components/voice-avatar/voice-avatar";
import { useTypedAppFormContext } from "@/hooks/use-app-form";

import { ttsFormOptions } from "./text-to-speech-form";

export function VoiceSelectorButton() {
  

  return (
    <DrawerTrigger asChild>
      <Button
        variant="outline"
        size="sm"
        className="flex-1 justify-start gap-2 px-2"
      >
        Button
        <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
      </Button>
    </DrawerTrigger>
  );
}