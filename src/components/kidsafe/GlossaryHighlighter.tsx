import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { glossaryTerms } from "@/data/glossaryData";

interface GlossaryHighlighterProps {
  text: string;
  className?: string;
}

export const GlossaryHighlighter: React.FC<GlossaryHighlighterProps> = ({ text, className }) => {
  // Sort terms by length (longest first) to match longer phrases before shorter ones
  const sortedTerms = [...glossaryTerms].sort((a, b) => b.term.length - a.term.length);
  
  // Create a regex pattern that matches any glossary term (case-insensitive, whole word)
  const pattern = sortedTerms
    .map(t => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  
  const regex = new RegExp(`\\b(${pattern})\\b`, 'gi');
  
  // Split the text and identify glossary terms
  const parts: { text: string; isGlossary: boolean; definition?: string }[] = [];
  let lastIndex = 0;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index), isGlossary: false });
    }
    
    // Find the matching term (case-insensitive)
    const matchedTerm = sortedTerms.find(
      t => t.term.toLowerCase() === match![0].toLowerCase()
    );
    
    parts.push({
      text: match[0],
      isGlossary: true,
      definition: matchedTerm?.definition
    });
    
    lastIndex = regex.lastIndex;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), isGlossary: false });
  }
  
  if (parts.length === 0) {
    return <span className={className}>{text}</span>;
  }
  
  return (
    <TooltipProvider delayDuration={200}>
      <span className={className}>
        {parts.map((part, index) => {
          if (part.isGlossary && part.definition) {
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <span className="glossary-term cursor-help border-b-2 border-dotted border-primary/60 text-primary hover:bg-primary/10 transition-colors rounded-sm px-0.5">
                    {part.text}
                  </span>
                </TooltipTrigger>
                <TooltipContent 
                  side="top" 
                  className="max-w-xs bg-popover text-popover-foreground p-3 shadow-lg"
                >
                  <p className="font-semibold text-sm mb-1">{part.text}</p>
                  <p className="text-xs text-muted-foreground">{part.definition}</p>
                </TooltipContent>
              </Tooltip>
            );
          }
          return <span key={index}>{part.text}</span>;
        })}
      </span>
    </TooltipProvider>
  );
};

// Helper component to wrap any children and highlight glossary terms in text nodes
export const GlossaryWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const processNode = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') {
      return <GlossaryHighlighter text={node} />;
    }
    
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<{ children?: React.ReactNode }>;
      if (element.props.children) {
        return React.cloneElement(element, {
          ...element.props,
          children: React.Children.map(element.props.children, processNode)
        });
      }
    }
    
    return node;
  };
  
  return <>{React.Children.map(children, processNode)}</>;
};
