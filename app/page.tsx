import Link from "next/link"
import { Sparkles } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillPill from "@/components/small-components/skill-pill"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
            <HeroSection />

            <AboutSection />

            <ServicesSection />

            <ExperienceSection />

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.2),transparent_40%)] z-0"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Projects</h2>
                        <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <ProjectCard
                            title="Rushed AI"
                            description="Create web apps, websites and web components in minutes"
                            tags={["Next.js", "Claude", "NeonDB", "Inngest AgentKit"]}
                            imageUrl="/rushed-ai.png"
                            demoUrl="https://rushed-ai.vercel.app/"
                            githubUrl="https://github.com/brayanj4y/rushed"
                        />
                        <ProjectCard
                            title="CodeAssist"
                            description="a browser-based code editor that uses Gemini to assist you in real time!"
                            tags={["Typescript", "Next.js", "Gemini API", "Monaco"]}
                            imageUrl="/codeassist.png"
                            demoUrl="https://code-assist-lilac.vercel.app/"
                            githubUrl="https://github.com/brayanj4y/code-assist"
                        />
                        <ProjectCard
                            title="Zenote"
                            description="AI powered note taking app for both markdown and normal text with mind map"
                            tags={["AI", "Gemini API", "Next.js", "Note app"]}
                            imageUrl="/zenote.jpeg"
                            demoUrl="https://zenotes-two.vercel.app/"
                            githubUrl="https://github.com/brayanj4y/zenotes"
                        />
                        <ProjectCard
                            title="Whispr"
                            description="A NGL alternative but better Anonymous messaging • Self-destructing secrets"
                            tags={["Self destruct message", "Messaging", "Secrets"]}
                            imageUrl="/whispr.jpeg"
                            demoUrl="https://whispr-lime.vercel.app/"
                            githubUrl="https://github.com/brayanj4y/whispr"
                        />


                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="https://github.com/brayanj4y?tab=repositories"
                            className="bg-white text-primary hover:bg-gray-50 border border-gray-200 shadow-sm px-8 py-4 rounded-lg font-medium transition-all hover:shadow-md inline-flex items-center"
                        >
                            View All Projects
                            <Sparkles className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.2),transparent_40%)] z-0"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Skills & Technologies</h2>

                    <div className="flex flex-wrap justify-center gap-6">
                        <SkillPill name="AWS" />
                        <SkillPill name="Supabase" />
                        <SkillPill name="Clerk" />
                        <SkillPill name="GitHub" />
                        <SkillPill name="JavaScript" />
                        <SkillPill name="HTML5" />
                        <SkillPill name="CSS" />
                        <SkillPill name="Node.js" />
                        <SkillPill name="Next.js" />
                        <SkillPill name="SQLite3" />
                        <SkillPill name="MySQL" />
                        <SkillPill name="Postgres" />
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    )
}
