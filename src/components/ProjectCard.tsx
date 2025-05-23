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

  // Extract the first item as summary (will be displayed in bold)
  const summary = descriptionArray.length > 0 ? descriptionArray[0] : ""
  // Rest of the description points (excluding the first one)
  const restOfDescription = descriptionArray.slice(1)

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
      {/* Title always visible */}
      <h3 className="text-xl font-semibold text-morandi-blue-dark mb-2 font-montserrat">{title}</h3>

      {/* Caption always visible if provided */}
      {caption && <p className="text-morandi-blue font-medium mb-3">{caption}</p>}

      {/* Summary - always visible, no bullet point */}
      {summary && <p className="font-bold text-gray-700 text-sm mb-4">{summary}</p>}

      {/* Tools & Technologies - always visible */}
      <div className="mb-4">
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

      {/* Key Outcome - always visible */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-morandi-blue-dark mb-1">Key Outcome</h4>
        <p className="text-sm text-gray-600">{outcome}</p>
      </div>

      {/* Rest of description points - visible only when expanded */}
      {isExpanded && restOfDescription.length > 0 && (
        <div className="transition-all duration-300 opacity-100">
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            {restOfDescription.map((item, index) => (
              <li key={index} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Indicator that there's more content when collapsed */}
      {!isExpanded && restOfDescription.length > 0 && (
        <div className="text-xs text-gray-400 mt-2">Hover to see more details...</div>
      )}
    </div>
  )
}

export default ProjectCard
