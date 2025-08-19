import { useState, useEffect } from "react";

const TerminalSection = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const commands = [
    "helm delete my-sanity --purge",
    "kubectl get pods | grep -i 'why-is-this-not-working'",
    "yoke deploy --please-work-this-time",
    "timoni apply | tee /dev/null # because we're optimists",
    "tanka apply env/dev | grep -v 'error' # denial is healthy",
    "kro run app.yaml # crossing fingers",
    "kubectl describe pod chaos-monkey",
    "helm status broken-dreams"
  ];

  useEffect(() => {
    const command = commands[currentCommand];
    if (isTyping && displayText.length < command.length) {
      const timeout = setTimeout(() => {
        setDisplayText(command.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (isTyping) {
      setTimeout(() => setIsTyping(false), 1000);
    } else {
      setTimeout(() => {
        setDisplayText("");
        setIsTyping(true);
        setCurrentCommand((prev) => (prev + 1) % commands.length);
      }, 2000);
    }
  }, [displayText, currentCommand, isTyping, commands]);

  return (
    <section className="py-16 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-neon-green">Live Terminal Feed</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-lg border-2 border-neon-green shadow-lg">
            {/* Terminal header */}
            <div className="flex items-center gap-2 bg-muted p-3 rounded-t-lg">
              <div className="w-3 h-3 rounded-full bg-danger-red"></div>
              <div className="w-3 h-3 rounded-full bg-warning-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-neon-green"></div>
              <span className="ml-4 text-sm text-muted-foreground">helm-killer-workshop.terminal</span>
            </div>
            
            {/* Terminal content */}
            <div className="p-6 font-mono text-neon-green">
              <div className="space-y-2">
                <div>$ whoami</div>
                <div className="text-neon-blue">desperate-devops-engineer</div>
                <div>$ pwd</div>
                <div className="text-neon-blue">/path/to/enlightenment/or/madness</div>
                <div>$ cat workshop-status.txt</div>
                <div className="text-warning-yellow">Currently testing: All the things</div>
                <div className="text-warning-yellow">Sanity level: Questionable</div>
                <div className="text-warning-yellow">Coffee consumption: Critical</div>
                <div className="mt-4">$ {displayText}<span className="animate-pulse">|</span></div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              * Actual terminal output may include more crying and less productivity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;