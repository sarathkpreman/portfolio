import { ArrowDown } from "lucide-react"

export const ScrollIndicator = ({ label = "SCROLL TO EXPLORE", onClick }) => {
  return (
    <button
      onClick={onClick} 
      className="flex items-center gap-3 group cursor-pointer"
    >
      <span className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-black group-hover:bg-black group-hover:text-white transition-colors">
        <ArrowDown className="w-4 h-4" />
      </span>
      <span className="font-mono text-xs tracking-widest whitespace-nowrap">
        {label}
      </span>
    </button>
  )
}