import Link from "next/link"
import { Sparkles } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillPill from "@/components/skill-pill"
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
                            title="Emergency Response System"
                            description="An app for real-time emergency communication and resource allocation."
                            tags={["Bootstrap", "CSS", "Frontend", "Emergency"]}
                            imageUrl="/samu.png"
                            demoUrl="https://github.com/brayanj4y/SAMU-douala-web-emergency-system-frontend"
                            githubUrl="https://github.com/brayanj4y/SAMU-douala-web-emergency-system-frontend"
                        />
                        <ProjectCard
                            title="AI Exam Generator Using Gemini API"
                            description="An intelligent tool designed to create customized exam questions and quizzes."
                            tags={["AI", "Gemini API", "Next.js", "EdTech"]}
                            imageUrl="/exam-gen.png"
                            demoUrl="https://exam-question-generator-g1zgzm.vercel.app/"
                            githubUrl="https://github.com/brayanj4y/ai-powered-exam-generator"
                        />
                        <ProjectCard
                            title="Dataset Generator For AI Prototyping"
                            description="A customizable tool to generate synthetic datasets for training and testing machine learning models."
                            tags={["AI Tools", "Dataset", "Automation"]}
                            imageUrl="/dataset.png"
                            demoUrl="https://github.com/CodeHive-by-Jay/Dataset-Generator-For-CodeHive"
                            githubUrl="https://github.com/CodeHive-by-Jay/Dataset-Generator-For-CodeHive"
                        />
                        <ProjectCard
                            title="Personal Portfolio Website"
                            description="A modern and responsive portfolio website showcasing my projects, skills, and experience."
                            tags={["Next.js", "Tailwind CSS", "Portfolio"]}
                            imageUrl="/folio.png"
                            demoUrl="https://brayanj4y-folio.vercel.app/"
                            githubUrl="https://github.com/brayanj4y/brayanj4y-folio"
                        />
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="https://github.com/brayanj4y/"
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
                        <SkillPill name="PHP" />
                        <SkillPill name="JavaScript" />
                        <SkillPill name="Python" />
                        <SkillPill name="NumPy" />
                        <SkillPill name="Pandas" />
                        <SkillPill name="Scikit-learn" />
                        <SkillPill name="HTML5" />
                        <SkillPill name="CSS" />
                        <SkillPill name="Bootstrap 5" />
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