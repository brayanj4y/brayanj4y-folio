"use client";
import React, { useState, useEffect } from "react";
import { Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FloatingNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
          setIsMobileMenuOpen(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Bucketlist", href: "/bucketlist" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
    },
    {
      name: "Mail",
      icon: Mail,
      href: "mailto:your@email.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-100%); }
        }
      `}</style>


      <nav
        className={`hidden sm:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${!isVisible ? "opacity-0 -translate-y-20 pointer-events-none" : ""
          } animate-[fadeInDown_0.8s_ease-out]`}
      >
        <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center space-x-8 px-6 py-3">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 px-3 py-1 rounded hover:bg-gray-100 transform hover:scale-105 ${isActive
                    ? "text-gray-800 bg-gray-100"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="h-6 w-px bg-gray-300"></div>

            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 text-gray-600 hover:bg-gray-100 ${social.color}`}
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>


      <div className="sm:hidden">

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`fixed top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg transition-all duration-300 ${isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0"
            }`}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <Menu
              className={`w-6 h-6 text-gray-700 absolute transition-all duration-300 ${isMobileMenuOpen
                ? "opacity-0 rotate-180 scale-75"
                : "opacity-100 rotate-0 scale-100"
                }`}
            />
            <X
              className={`w-6 h-6 text-gray-700 absolute transition-all duration-300 ${isMobileMenuOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-180 scale-75"
                }`}
            />
          </div>
        </button>


        <div
          className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-lg transition-all duration-500 ease-out ${isMobileMenuOpen
            ? "opacity-100 visible animate-[slideDown_0.5s_ease-out]"
            : "opacity-0 invisible animate-[slideUp_0.3s_ease-in]"
            }`}
        >
          <div className="flex flex-col items-center justify-center min-h-screen p-8">
            {/* Navigation Items */}
            <div className="space-y-6 mb-12 text-center">
              {navItems.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-2xl font-medium transition-all duration-300 transform hover:scale-105 ${isActive
                      ? "text-gray-900 scale-110"
                      : "text-gray-600 hover:text-gray-900"
                      } ${isMobileMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                      }`}
                    style={{
                      transitionDelay: isMobileMenuOpen
                        ? `${index * 100 + 200}ms`
                        : "0ms",
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Social Links */}
            <div
              className={`flex space-x-8 transition-all duration-300 transform ${isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
                }`}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${navItems.length * 100 + 400}ms`
                  : "0ms",
              }}
            >
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 transition-all duration-300 text-gray-600 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    <IconComponent className="w-7 h-7" />
                  </a>
                );
              })}
            </div>

            {/* Close hint */}
            <p
              className={`mt-12 text-sm text-gray-400 transition-all duration-300 ${isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
                }`}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${navItems.length * 100 + 600}ms`
                  : "0ms",
              }}
            >
              Tap anywhere to close
            </p>
          </div>

          {/* Clickable overlay to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        </div>
      </div>
    </>
  );
};

export default FloatingNavbar;
