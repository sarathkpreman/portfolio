import { ArrowUp } from "lucide-react" 

export const TopscrollIndicator = ({ label = "Go Home", onClick }) => {
  return (
    <button
      onClick={onClick} 
      className="flex items-center gap-3 group cursor-pointer"
      type="button"
    >
      <span className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-black group-hover:bg-black group-hover:text-white transition-colors">
        <ArrowUp className="w-4 h-4" />
      </span>
      <span className="font-mono text-xs tracking-widest whitespace-nowrap">
        {label}
      </span>
    </button>
  )
}