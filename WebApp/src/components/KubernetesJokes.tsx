import { Card, CardContent } from "@/components/ui/card";

const jokes = [
  {
    setup: "Why did the pod go to therapy?",
    punchline: "Because it had too many containers and couldn't scale its emotions!",
    emoji: "😭"
  },
  {
    setup: "What do you call a Kubernetes cluster that's always crashing?",
    punchline: "A disaster-overy system!",
    emoji: "💥"
  },
  {
    setup: "Why don't DevOps engineers ever get lonely?",
    punchline: "Because they're always dealing with clusters!",
    emoji: "👥"
  },
  {
    setup: "What's the difference between Helm and a magic 8-ball?",
    punchline: "The magic 8-ball gives you clearer error messages!",
    emoji: "🎱"
  },
  {
    setup: "Why did the YAML file break up with JSON?",
    punchline: "Because YAML was too indented and JSON couldn't handle the spacing!",
    emoji: "💔"
  }
];

const KubernetesJokes = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-electric bg-clip-text text-transparent">
            Kubernetes Comedy Central
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {jokes.map((joke, index) => (
            <Card key={index} className="hover-glow-accent bg-card border-border group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{joke.emoji}</div>
                <p className="font-semibold text-foreground mb-3">{joke.setup}</p>
                <p className="text-neon-blue italic">{joke.punchline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-muted p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-2">Pro Tip:</h3>
            <p className="text-muted-foreground">
              If you're not laughing, you're probably debugging YAML indentation. 
              We feel your pain. That's literally why we're here! 🤗
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KubernetesJokes;