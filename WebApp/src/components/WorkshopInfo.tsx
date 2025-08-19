import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WorkshopInfo = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-danger-red">What's This Madness About?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're putting Helm alternatives through the ultimate stress test. Think of it as 
            "Survivor: Kubernetes Edition" but with more YAML and less coconuts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="hover-glow-primary bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                🎯 Workshop Goals
              </CardTitle>
              <CardDescription>What we're trying to accomplish (besides chaos)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-muted-foreground">
                <li>• Test real-world deployment scenarios</li>
                <li>• Compare learning curves (spoiler: they're all steep)</li>
                <li>• Measure how many times we say "it works on my machine"</li>
                <li>• Count the tears shed over configuration files</li>
                <li>• Determine which tool makes us question our life choices least</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover-glow-accent bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-accent flex items-center gap-2">
                🏆 What You'll Learn
              </CardTitle>
              <CardDescription>Skills that may or may not help your career</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-muted-foreground">
                <li>• How to install 4 different tools (and probably break them)</li>
                <li>• The art of reading cryptic error messages</li>
                <li>• Advanced YAML debugging techniques</li>
                <li>• How to blame infrastructure when code doesn't work</li>
                <li>• The philosophical question: "Is Helm really that bad?"</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Card className="bg-gradient-danger text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">⚠️ WARNING ⚠️</h3>
              <p className="text-lg mb-4">
                This workshop may cause: existential dread, imposter syndrome, 
                uncontrollable urge to rewrite everything in Go, and spontaneous 
                creation of shell scripts that should be systemd services.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                I Accept the Risks
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkshopInfo;