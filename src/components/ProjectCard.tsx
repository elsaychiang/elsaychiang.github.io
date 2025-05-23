"use client"

import { cn } from "@/lib/utils"
import { useState, useRef } from "react"

export interface ProjectProps {
  title: string
  caption?: string
  description: string[] | string
  tools: string[]
  outcome: string
  className?: string
}

const ProjectCard = ({ title, caption, description, tools, outcome, className }: ProjectProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Convert description to array if it's a string
  const descriptionArray = typeof description === "string" ? [description] : description

  // Handle mouse enter/leave events
  const handleMouseEnter = () => {
    setIsExpanded(true)
  }

  const handleMouseLeave = () => {
    setIsExpanded(false)
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "bg-white rounded-lg p-6 card-hover transition-all duration-300 h-full",
        isExpanded ? "shadow-lg transform -translate-y-1" : "shadow-md",
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-xl font-semibold text-morandi-blue-dark mb-2 font-montserrat">{title}</h3>

      {/* Display caption if provided */}
      {caption && <p className="text-morandi-blue font-medium mb-2">{caption}</p>}

      {/* Description with animation */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-[150px] opacity-90",
        )}
      >
        <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
          {isExpanded
            ? descriptionArray.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))
            : descriptionArray.slice(0, 2).map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
        </ul>

        {/* Tools & Technologies - visible in both states but with transition */}
        <div
          className={cn(
            "mb-4 transition-all duration-300",
            isExpanded ? "opacity-100" : "opacity-0 h-0 overflow-hidden",
          )}
        >
          <h4 className="text-sm font-medium text-morandi-blue-dark mb-2">Tools & Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="text-xs bg-morandi-neutral-light text-morandi-blue-dark px-3 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Key Outcome - visible in both states but with transition */}
        <div
          className={cn("transition-all duration-300", isExpanded ? "opacity-100" : "opacity-0 h-0 overflow-hidden")}
        >
          <h4 className="text-sm font-medium text-morandi-blue-dark mb-1">Key Outcome</h4>
          <p className="text-sm text-gray-600">{outcome}</p>
        </div>
      </div>

      {/* Show indicator that there's more content when collapsed */}
      {!isExpanded && descriptionArray.length > 2 && (
        <div className="text-xs text-gray-400 mt-2">
          Hover to see {descriptionArray.length - 2} more point{descriptionArray.length - 2 !== 1 ? "s" : ""}...
        </div>
      )}
    </div>
  )
}

export default ProjectCard
