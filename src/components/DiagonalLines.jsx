export const DiagonalLines = ({ count = 9, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="w-0.5 h-5 bg-foreground rotate: [25deg]"
        />
      ))}
    </div>
  )
}