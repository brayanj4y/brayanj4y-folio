"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

// Define all navigation items with their corresponding section IDs
const navItems = [
  { href: "#about", label: "About" },
  { href: "#background", label: "Background" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const activeSection = useActiveSection()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Get header height for offset calculations
    const header = document.querySelector("header")
    if (header) {
      setHeaderHeight(header.offsetHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle smooth scrolling with proper offset
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)

    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Calculate position with offset for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerHeight - 20 // Extra 20px buffer

      // Scroll to the element with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Update URL without page reload
      window.history.pushState(null, "", href)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-neutral-50/95 backdrop-blur-sm py-5",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="h-10 w-10 rounded-full bg-amber-800 text-white flex items-center justify-center font-medium"
          >
            SB
          </Link>
          <span className="font-medium hidden sm:block">Souop Silvain Brayan</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-sm transition-colors relative py-1 px-2",
                activeSection === item.href.substring(1)
                  ? "text-amber-800 font-medium"
                  : "text-neutral-700 hover:text-amber-800",
              )}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-800 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-sm py-2 px-4 rounded-md transition-colors",
                  activeSection === item.href.substring(1)
                    ? "bg-amber-50 text-amber-800 font-medium"
                    : "text-neutral-700 hover:bg-neutral-100",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
