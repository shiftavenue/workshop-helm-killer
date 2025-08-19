import HeroSection from "@/components/HeroSection";
import ToolCard from "@/components/ToolCard";
import WorkshopInfo from "@/components/WorkshopInfo";
import KubernetesJokes from "@/components/KubernetesJokes";
import TerminalSection from "@/components/TerminalSection";

const tools = [
  {
    name: "Kro",
    description: "The new kid on the block",
    funnyQuote: "I'm not Helm, I swear! Please give me a chance!",
    pros: ["Fresh and modern", "Less baggage than your ex", "Actually readable config"],
    cons: ["So new it squeaks", "Documentation still in beta", "Your team will hate learning another tool"],
    deathCount: 47,
    survivalRating: "🌱 Seedling",
    emoji: "🌱"
  },
  {
    name: "Tanka",
    description: "JSON-based Kubernetes management",
    funnyQuote: "YAML? We don't need no stinking YAML! *uses JSON instead*",
    pros: ["JSON over YAML (controversial)", "Powerful templating", "Grafana approved"],
    cons: ["JSON is still not great", "Learning curve like Everest", "Makes you miss Helm sometimes"],
    deathCount: 1337,
    survivalRating: "🏔️ Mountain Climber",
    emoji: "🏔️"
  },
  {
    name: "Yoke",
    description: "Simple Kubernetes deployments",
    funnyQuote: "I'm like Helm but with less steps! (And less features... but who's counting?)",
    pros: ["Simple and lightweight", "Easy to understand", "Won't make you cry (much)"],
    cons: ["Limited features", "Not enterprise ready", "Too simple for complex needs"],
    deathCount: 256,
    survivalRating: "🐣 Baby Steps",
    emoji: "🐣"
  },
  {
    name: "Timoni",
    description: "CUE-based package manager",
    funnyQuote: "I speak CUE, therefore I am... confused but confident!",
    pros: ["CUE language power", "Type safety", "Modern architecture"],
    cons: ["What the heck is CUE?", "Steep learning curve", "Your YAML skills are useless here"],
    deathCount: 2048,
    survivalRating: "🧙‍♂️ Wizard Level",
    emoji: "🧙‍♂️"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <WorkshopInfo />
      
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-electric bg-clip-text text-transparent">
              Meet the Contenders
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Four brave tools enter the arena. Only your sanity leaves.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {tools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>
      </section>
      
      <KubernetesJokes />
      
      <TerminalSection />
      
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Join the Chaos?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Sign up now and receive a free debugging rubber duck and a lifetime supply of 
            imposter syndrome! (Duck not guaranteed, syndrome definitely included)
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover-glow-primary transition-all">
              🎪 Join the Circus
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all">
              📧 Get Updates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
