import React from 'react';
import ChatInterface from './components/MercariAgent/ChatInterface';
import { Drawer } from './components/ui/Drawer';
import { Play } from 'lucide-react';


const experience = [
  {
    period: "2022–Present",
    role: "Software Engineer",
    company: "Nomura Securities, Tokyo",
    detail: "Production support for Java-based front-office equity systems (90% alert reduction). Built RAG tool for semantic search of past incidents."
  },
  {
    period: "2020–2022",
    role: "Software Engineer",
    company: "Yokogawa Electric, Tokyo",
    detail: "Led CRM rollout for India/UAE. Built REST APIs (Spring Boot) and Python migration scripts for global data consolidation."
  },
  {
    period: "2019",
    role: "Data Science Intern",
    company: "Yokogawa Electric, Tokyo",
    detail: "Prototyped semantic search using Elasticsearch and AWS Comprehend."
  },
  {
    period: "2016–2020",
    role: "B.Tech (Civil Engineering)",
    company: "IIT Ropar",
    detail: "Department Rank 4. Focused on computational engineering and deep learning."
  }
];

const projects = [
  {
    title: "Mercari Shopping Agent",
    year: "2025",
    stack: "Python, OpenAI API",
    link: "https://github.com/mehraverse/mercari_agent_project",
    desc: "Autonomous agent using OpenAI function calling to navigate Mercari Japan. Filters listings by budget and quality.",
    interactive: true,
    isOpen: false // state hook will handle this logic in component
  },
  {
    title: "AI Agent System",
    year: "2025",
    stack: "FastAPI, AWS ECS, Docker",
    link: "https://github.com/mehraverse/ai-agent-system",
    desc: "Scalable backend for secure code execution. Supports multi-user concurrent sessions with 100% uptime on AWS."
  },
  {
    title: "Indus Express",
    year: "2025",
    stack: "Next.js, Tailwind CSS",
    link: "https://indus.express",
    desc: "Indian news, simple, no ads or paywalls."
  },
  {
    title: "Abstractive Summarizer",
    year: "2020",
    stack: "TensorFlow, NLP",
    link: "https://drive.google.com/file/d/1zxVeL_D94YU4AZKfFQFJ-VG0H_axhtnm/view?usp=sharing",
    desc: "LSTM Seq2Seq model for abstractive text summarization. Verified by ROUGE metrics."
  }
];

const skills = [
  "Java", "Spring Boot", "Python", "SQL", "AWS", "Bash", "Docker", "Kubernetes", "PyTorch", "Elasticsearch"
];

const certifications = [
  {
    title: "Neural Networks & Deep Learning",
    issuer: "deeplearning.ai",
    link: "https://www.coursera.org/account/accomplishments/certificate/XRMVXTZ83LE3"
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "UC San Diego",
    link: "https://www.coursera.org/account/accomplishments/certificate/NWNFCD4NW3ZZ"
  }
];

const misc = [
  "Founder, Indian Philosophy Collective (Tokyo): Building a community for cross-cultural dialogue.",
  "Batch Representative (2018-19): Liaison between students & professors.",
  "Sports (2017): Central Defender, IIT Madras Sports Meet.",
  "Cultural (2018): Editor, Filmmaking Team at IIT Roorkee."
];

const photos = [
  { src: "/assets/Nubra.jpg", caption: "Nubra" },
  { src: "/assets/Zao.jpg", caption: "Zao" },
  { src: "/assets/Genoa.jpg", caption: "Genoa" },
  { src: "/assets/Interlaken.jpg", caption: "Interlaken" },
];

// --- COMPONENTS ---

const Section = ({ title, children }) => (
  <section className="mb-16">
    <h2 className="font-serif text-lg border-b border-gray-300 pb-2 mb-6 uppercase tracking-widest text-gray-400 text-xs">
      {title}
    </h2>
    {children}
  </section>
);

const App = () => {
  const [isAgentOpen, setIsAgentOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif selection:bg-gray-200">
      <Drawer isOpen={isAgentOpen} onClose={() => setIsAgentOpen(false)}>
        <ChatInterface />
      </Drawer>

      <div className="max-w-3xl mx-auto px-6 py-24">

        {/* HEADER */}
        <header className="mb-20">
          <h1 className="text-4xl font-normal mb-2 tracking-tight">Abhishek Mehra</h1>
          <p className="text-gray-600 mb-6 font-sans text-sm">Software Engineer based in Tokyo.</p>
          <div className="font-mono text-xs flex gap-6 text-gray-500 underline underline-offset-4 decoration-1 decoration-gray-300">
            <a href="mailto:abhishekmehra1010@gmail.com" className="hover:text-black">Email</a>
            <a href="https://github.com/mehraverse" className="hover:text-black">GitHub</a>
            <a href="https://linkedin.com/in/abhishekmehra19" className="hover:text-black">LinkedIn</a>
          </div>
        </header>

        {/* EXPERIENCE */}
        <Section title="Timeline">
          <div className="space-y-8">
            {experience.map((e, i) => (
              <div key={i} className="grid grid-cols-[120px_1fr] gap-4">
                <span className="font-mono text-xs text-gray-400 pt-1">{e.period}</span>
                <div>
                  <h3 className="font-medium text-lg text-gray-900">{e.role}, {e.company}</h3>
                  <p className="font-sans text-sm text-gray-600 mt-2 leading-relaxed">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section title="Projects">
          <div className="space-y-10">
            {projects.map((p, i) => (
              <article key={i}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1">
                  <h3 className="font-medium text-lg flex flex-wrap items-center gap-2">
                    <a href={p.link} target="_blank" rel="noreferrer" className="hover:underline decoration-1 underline-offset-2">
                      {p.title}
                    </a>
                    {p.interactive && (
                      <button
                        onClick={() => setIsAgentOpen(true)}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-sans font-medium text-gray-500 hover:text-gray-900 border border-transparent hover:border-gray-200 rounded-full transition-all tracking-wide uppercase group shrink-0"
                      >
                        <Play size={8} fill="currentColor" className="text-gray-300 group-hover:text-gray-900 transition-colors" />
                        Demo
                      </button>
                    )}
                  </h3>
                  <span className="font-mono text-xs text-gray-400">{p.year}</span>
                </div>
                <div className="font-mono text-xs text-gray-500 mb-2">{p.stack}</div>
                <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-prose">
                  {p.desc}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* SKILLS & CERTS */}
        <Section title="Technical Context">
          <div className="mb-8">
            <h4 className="font-sans text-sm font-bold text-gray-900 mb-2">Toolkit</h4>
            <p className="font-mono text-xs text-gray-600 leading-relaxed max-w-lg">
              {skills.join(" / ")}
            </p>
          </div>
          <div>
            <h4 className="font-sans text-sm font-bold text-gray-900 mb-2">Certifications</h4>
            <ul className="list-disc pl-4 font-sans text-sm text-gray-600 space-y-1 mb-8">
              {certifications.map((c, i) => (
                <li key={i}>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline decoration-gray-300 underline-offset-2"
                  >
                    {c.title}
                  </a>
                  <span className="text-gray-400 pl-2">— {c.issuer}</span>
                </li>
              ))}
            </ul>

          </div>
        </Section>

        {/* BEYOND THE CODE */}
        <Section title="Leadership">
          <ul className="list-disc pl-4 font-sans text-sm text-gray-600 space-y-1">
            {misc.map((m, i) => (
              <li key={`m-${i}`}>{m}</li>
            ))}
          </ul>
        </Section>

        {/* VISUALS */}
        <Section title="Life in Pictures">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 grayscale hover:grayscale-0 transition-all duration-500">
            {photos.map((p, i) => (
              <div key={i} className="aspect-square bg-gray-100 overflow-hidden">
                <img src={p.src} alt={p.caption} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <p className="font-mono text-[10px] text-gray-400 mt-4 text-right">
            Selected frames: Nubra, Zao, Genoa, Interlaken
          </p>
        </Section>

      </div>
    </div>
  );
};

export default App;