"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
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
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

const ReviewCard = ({
  name,
  image,
  quote,
}: {
  name: string;
  image: string;
  quote: string;
}) => {
  return (
    <figure
      className="relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6"
      style={{
        border: '1px solid #D6E9F5',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <figcaption className="text-sm" style={{color: '#1E5F99', fontWeight: '500'}}>
          {name}
        </figcaption>
      </div>
      <blockquote className="text-sm" style={{color: '#2C3E50', lineHeight: '1.6', fontWeight: '400'}}>
        "{quote}"
      </blockquote>
    </figure>
  );
};

export { Marquee, ReviewCard };