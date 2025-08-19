import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(142, 76%, 36%, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(142, 76%, 36%, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Floating containers animation */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-primary rounded border-2 border-neon-green float-animation" />
      <div className="absolute top-32 right-20 w-6 h-6 bg-accent rounded border-2 border-neon-blue float-animation" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-32 w-10 h-10 bg-destructive rounded border-2 border-danger-red float-animation" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">HELM</span>
            <br />
            <span className="text-danger-red glitch-text text-glow-danger">KILLER</span>
          </h1>
          <div className="terminal-text text-xl md:text-2xl mb-8 font-mono">
            {'>'} kubectl delete helm --force --grace-period=0 💀
          </div>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
          Join us for the ultimate showdown where we ruthlessly test Helm alternatives! 
          <br />
          <span className="text-neon-green">Warning:</span> No YAML files were harmed in the making of this workshop*
          <br />
          <small className="text-sm">*That's a lie. Many YAML files died.</small>
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
          <Button variant="default" size="lg" className="hover-glow-primary bg-gradient-primary text-primary-foreground">
            🚀 Register for Chaos
          </Button>
          <Button variant="outline" size="lg" className="hover-glow-accent border-neon-blue text-neon-blue">
            📺 Watch the Carnage
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p>⚠️ Side effects may include: YAML nightmares, dependency hell, and uncontrollable urge to containerize everything</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;