import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ToolCardProps {
  name: string;
  description: string;
  funnyQuote: string;
  pros: string[];
  cons: string[];
  deathCount: number;
  survivalRating: string;
  emoji: string;
}

const ToolCard = ({ name, description, funnyQuote, pros, cons, deathCount, survivalRating, emoji }: ToolCardProps) => {
  return (
    <Card className="hover-glow-primary bg-card border-border group transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{emoji}</span>
          <div>
            <CardTitle className="text-2xl text-primary">{name}</CardTitle>
            <CardDescription className="text-muted-foreground">{description}</CardDescription>
          </div>
        </div>
        <div className="bg-secondary p-3 rounded-lg mt-4">
          <p className="text-sm italic text-neon-blue">"{funnyQuote}"</p>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-neon-green mb-2">✅ Pros:</h4>
            <ul className="text-sm space-y-1">
              {pros.map((pro, index) => (
                <li key={index} className="text-muted-foreground">• {pro}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-danger-red mb-2">❌ Cons:</h4>
            <ul className="text-sm space-y-1">
              {cons.map((con, index) => (
                <li key={index} className="text-muted-foreground">• {con}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-muted p-3 rounded-lg space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">YAML Files Destroyed:</span>
            <span className="text-danger-red font-bold">{deathCount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">Survival Rating:</span>
            <span className="text-neon-green font-bold">{survivalRating}</span>
          </div>
        </div>
        
        <Button variant="outline" className="w-full hover-glow-accent">
          Test This Tool 🧪
        </Button>
      </CardContent>
    </Card>
  );
};

export default ToolCard;