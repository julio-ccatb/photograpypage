import { cn } from "@/lib/utils"

interface WaveDividerProps {
  className?: string
  fill?: string
  position?: "top" | "bottom"
  animate?: boolean
}

export function WaveDivider({
  className,
  fill = "fill-zinc-900",
  position = "bottom",
  animate = true,
}: WaveDividerProps) {
  return (
    <div
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden leading-0 z-10",
        position === "top" ? "top-0" : "bottom-0",
        className,
      )}
    >
      <svg
        className="relative block w-full h-[30px] sm:h-[40px] md:h-[70px]"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className={animate ? "animate-wave" : ""}>
          <use xlinkHref="#wave-path" className={cn(fill, "opacity-30")} x="48" y="0" />
        </g>
        <g className={animate ? "animate-wave-slow" : ""}>
          <use xlinkHref="#wave-path" className={cn(fill, "opacity-50")} x="48" y="3" />
        </g>
        <g className={animate ? "animate-wave-slower" : ""}>
          <use xlinkHref="#wave-path" className={cn(fill, "opacity-70")} x="48" y="5" />
        </g>
        <g>
          <use xlinkHref="#wave-path" className={cn(fill)} x="48" y="7" />
        </g>
      </svg>
    </div>
  )
}

