"use client";

import { useStore } from "@tanstack/react-form";

import { 
  VOICE_CATEGORY_LABELS
} from "@/features/voices/data/voice-categories";

import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTypedAppFormContext } from "@/hooks/use-app-form";
import { VoiceAvatar } from "@/components/voice-avatar/voice-avatar";

import { ttsFormOptions } from "./text-to-speech-form";

export function VoiceSelector() {


  return (
   <div>voice selector</div>
  );
};