import Image from "next/image"
import Link from "next/link"
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ProfileImage } from "@/components/profile-image"
import { AnimatedShapes } from "@/components/animated-shapes"

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Animated Shapes */}
      <section id="hero" className="pt-32 pb-20 px-4 md:pt-40 md:pb-32 relative overflow-hidden">
        <AnimatedShapes />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Hello, I am <span className="text-amber-800">Brayan</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-md">
                I keep it simple yet sharp—my designs and AI solutions are all about clean vibes, smart execution, and a
                touch of creative finesse.
              </p>
              <Link
                href="mailto:souopsylvain@gmail.com"
                className="inline-flex items-center text-amber-800 border-b border-amber-800 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors"
              >
                Hire me
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="\images\heroimg.jpg?height=500&width=400"
                alt="Brayan's portrait"
                fill
                className="object-cover rounded-tl-[100px] rounded-tr-[100px] relative z-10"
                priority
              />
              {/* Add a subtle glow effect behind the image */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-800/20 rounded-tl-[100px] rounded-tr-[100px] blur-xl transform scale-95 -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Updated with the new image */}
      <section id="about" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <ProfileImage src="/images/brayan-portrait.png" alt="Souop Silvain Brayan" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold mb-6">
                About <span className="text-amber-800">Souop Silvain B.</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-4">
                I'm a second-year HND student passionate about AI, software development, and machine learning. I've
                worked on ML projects and software applications, aiming to make an impact by blending innovation with
                functionality.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                I'm excited to collaborate with individuals and organizations that value creativity and problem-solving.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">AI Development</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Software Engineering</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Web Development</span>
              </div>
              <Link
                href="https://cvdesignr.com/p/65f2067992029"
                download
                className="inline-flex items-center text-amber-800 border-b border-amber-800 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors mt-8"
              >
                Download CV
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section - Ensure proper ID and spacing */}
      <section id="background" className="py-20 bg-neutral-50 scroll-mt-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">Background</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 mb-6 mx-auto"> {/* Increased size */}
                <Image src="\images\jfn.png?height=128&width=128" alt="Education icon" width={128} height={128} />
              </div>
              <h3 className="text-xl font-medium text-center mb-2">JFN-HITECH University Douala</h3>
              <div className="w-16 h-0.5 bg-amber-800 mx-auto mb-4"></div>
              <p className="text-amber-800 font-medium text-center mb-1">HND, Software Engineering</p>
              <p className="text-neutral-500 text-center">Oct 2023 - present</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 mb-6 mx-auto"> {/* Increased size */}
                <Image src="\images\ads.png?height=128&width=128" alt="Work icon" width={128} height={128} />
              </div>
              <h3 className="text-xl font-medium text-center mb-2">Gracify Technology Cameroun</h3>
              <div className="w-16 h-0.5 bg-amber-800 mx-auto mb-4"></div>
              <p className="text-amber-800 font-medium text-center mb-1">Internship</p>
              <p className="text-neutral-500 text-center">July 2024 - Jan 2025</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 mb-6 mx-auto"> {/* Increased size */}
                <Image src="\images\ads.png?height=128&width=128" alt="Internship icon" width={128} height={128} />
              </div>
              <h3 className="text-xl font-medium text-center mb-2">African Digital strategies Network</h3>
              <div className="w-16 h-0.5 bg-amber-800 mx-auto mb-4"></div>
              <p className="text-amber-800 font-medium text-center mb-1">Internship</p>
              <p className="text-neutral-500 text-center">Dec 2024 - Jan 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="focus-areas" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">AI & Software Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-neutral-200 rounded-lg hover:border-amber-800 transition-colors">
              <div className="w-16 h-16 mb-6 mx-auto">
                <Image src="https://icons.iconarchive.com/icons/nandostudio/rubber/128/terminal-icon.png?height=64&width=64" alt="AI icon" width={64} height={64} />
              </div>
              <h3 className="text-xl font-medium text-center mb-4">Intelligent Systems</h3>
              <p className="text-neutral-600 text-center">
                Developing AI models and applications to automate decision-making and enhance efficiency.
              </p>
            </div>

            <div className="p-8 border border-neutral-200 rounded-lg hover:border-amber-800 transition-colors">
              <div className="w-16 h-16 mb-6 mx-auto">
                <Image src="https://icons.iconarchive.com/icons/nandostudio/rubber/128/development-folder-icon.png?height=64&width=64" alt="Software icon" width={64} height={64} />
              </div>
              <h3 className="text-xl font-medium text-center mb-4">Software Solutions</h3>
              <p className="text-neutral-600 text-center">
                Crafting scalable software systems tailored to real-world needs.
              </p>
            </div>

            <div className="p-8 border border-neutral-200 rounded-lg hover:border-amber-800 transition-colors">
              <div className="w-16 h-16 mb-6 mx-auto">
                <Image src="https://icons.iconarchive.com/icons/nandostudio/rubber/128/iDisk-icon.png?height=64&width=64" alt="Data icon" width={64} height={64} />
              </div>
              <h3 className="text-xl font-medium text-center mb-4">Data Processing</h3>
              <p className="text-neutral-600 text-center">
                Building pipelines for data cleaning, transformation, and integration to fuel AI and software projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Ensure proper ID and spacing */}
      <section id="projects" className="py-20 bg-neutral-50 scroll-mt-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">Project Gallery</h2>
          <p className="text-lg text-neutral-600 text-center mb-16">Here are some of the projects I worked on</p>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="https://github.com/brayanj4y/SAMU-douala-web-emergency-system-frontend"
              target="_blank"
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="\images\samu.png?height=200&width=400"
                    alt="Emergency Response System"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 text-amber-800 group-hover:text-amber-700 transition-colors">
                    Emergency Response System
                  </h3>
                  <p className="text-neutral-600">
                    An app for real-time emergency communication and resource allocation.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="https://github.com/brayanj4y/ai-powered-exam-generator" target="_blank" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="\images\exam-gen.png?height=200&width=400"
                    alt="AI Exam Generator"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 text-amber-800 group-hover:text-amber-700 transition-colors">
                    AI Exam Generator Using Gemini API
                  </h3>
                  <p className="text-neutral-600">
                    An intelligent tool designed to create customized exam questions and quizzes.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="https://github.com/CodeHive-by-Jay/Dataset-Generator-For-CodeHive"
              target="_blank"
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="\images\dataset.png?height=200&width=400"
                    alt="Dataset Generator"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 text-amber-800 group-hover:text-amber-700 transition-colors">
                    Dataset Generator For AI Prototyping
                  </h3>
                  <p className="text-neutral-600">
                    A customizable tool to generate synthetic datasets for training and testing machine learning models.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="https://github.com/brayanj4y/brayanj4y-folio"
              target="_blank"
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src="\images\folio.png?height=200&width=400"
                    alt="Portfolio Project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 text-amber-800 group-hover:text-amber-700 transition-colors">
                    Personal Portfolio Website
                  </h3>
                  <p className="text-neutral-600">
                    A modern and responsive portfolio website showcasing my projects, skills, and experience.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Ensure proper ID and spacing */}
      <section id="contact" className="py-20 bg-amber-900 text-white scroll-mt-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                Reach out if you want to create impactful Projects{" "}
                <span className="italic underline underline-offset-4">together.</span>
              </h2>
              <p className="text-amber-200 text-sm tracking-wider mt-12 mb-2">TO SEE MORE OF ME, VISIT MY SOCIALS:</p>
              <div className="flex items-center gap-4 mb-12">
                <Link
                  href="https://github.com/brayanj4y"
                  target="_blank"
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://instagram.com/brayanj4y"
                  target="_blank"
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/brayan-j4y"
                  target="_blank"
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <span className="text-amber-100 text-sm">@brayanj4y</span>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="text-amber-200" size={20} />
                  <span className="text-amber-100">(237) 652 570 592</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-amber-200" size={20} />
                  <span className="text-amber-100">souopsilvain@hotmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px bg-amber-800/50 my-12"></div>
          <div className="flex flex-col md:flex-row justify-between items-center text-amber-200 text-sm">
            <p>
              All rights reserved ©Souop Silvain Brayan <span id="current-year">{new Date().getFullYear()}</span>
            </p>
            <p className="mt-2 md:mt-0">Made with ❤️ by Me</p>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  )
}
