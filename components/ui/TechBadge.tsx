import { cn } from "@/lib/utils"

interface TechBadgeProps {
  name: string
  className?: string
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-1 rounded bg-secondary/80 border border-border text-xs font-medium text-text-secondary whitespace-nowrap",
      className
    )}>
      {name}
    </span>
  )
}
