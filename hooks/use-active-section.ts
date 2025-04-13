"use client"

import { useState, useEffect } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    // All section IDs that we want to track
    const sections = ["hero", "about", "background", "projects", "contact"]

    // Better observer options with adjusted rootMargin to account for the header
    const observerOptions = {
      root: null,
      // Negative top margin to trigger earlier (accounting for fixed header)
      rootMargin: "-80px 0px -20% 0px",
      threshold: [0.1, 0.5],
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Filter for sections that are currently intersecting
      const visibleSections = entries.filter((entry) => entry.isIntersecting)

      if (visibleSections.length > 0) {
        // Get the first visible section (or the one with highest intersection ratio)
        const mostVisibleSection = visibleSections.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current,
        )

        setActiveSection(mostVisibleSection.target.id)
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  return activeSection
}
