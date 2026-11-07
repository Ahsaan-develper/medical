import {
  Stethoscope,
  Sparkles,
  Bluetooth,
  Smile,
  Siren,
  Baby,
  ScanLine,
  ShieldCheck,
  Clock,
  Wallet,
  Heart,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  implant: Bluetooth, // closest stand-in for a tooth-implant glyph
  smile: Smile,
  emergency: Siren,
  baby: Baby,
  scan: ScanLine,
  shield: ShieldCheck,
  clock: Clock,
  wallet: Wallet,
  heart: Heart,
  leaf: Leaf,
};

interface ServiceIconProps {
  name: string;
  className?: string;
  size?: number;
}

/**
 * Maps a string icon key (from data files) to a Lucide icon component.
 * Keeps data serializable while still getting typed icon components in the UI.
 */
export function ServiceIcon({ name, className, size = 24 }: ServiceIconProps) {
  const Icon = iconMap[name] ?? Stethoscope;
  return <Icon size={size} className={cn(className)} strokeWidth={1.75} />;
}
