import { ScrollIndicator } from "@/components/ScrollIndicator"
import { DiagonalLines } from "@/components/DiagonalLines"

export const SectionFooter = ({ number, title, description, nextSectionId }) => {

    const handleScrollClick = () => {
            document.getElementById(nextSectionId)?.scrollIntoView({ behavior: "smooth" })
    }

  return (
    <div className="w-full">
      <hr className="border-t-2 border-black" />

      <div className="flex items-center justify-between py-4 md:py-6">
        <div className="flex items-center gap-3">
          <span className="font-display font-black text-2xl md:text-4xl text-primary leading-none">
            {number}
          </span>
          <div className="flex flex-col leading-tight">
            <h4 className="font-black text-sm md:text-base tracking-wide uppercase">
              {title}
            </h4>
            <p className="font-mono text-xs text-black/60">
              {description}
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ScrollIndicator onClick={handleScrollClick} />
        </div>

        <div className="hidden md:flex">
          <DiagonalLines />
        </div>
      </div>
    </div>
  )
}