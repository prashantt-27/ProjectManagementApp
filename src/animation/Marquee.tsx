import React from "react";
import { cn } from "../lib/utils";

interface MarqueeProps extends React.ComponentPropsWithRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)]",
            vertical ? "flex-col" : "flex-row",
            reverse ? "[animation-direction:reverse]" : "",
            pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
            vertical ? "animate-marquee-vertical" : "animate-marquee"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
