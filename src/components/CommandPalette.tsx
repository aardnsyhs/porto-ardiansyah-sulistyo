import { useState, useEffect } from 'react';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Home, User, Code, Briefcase, FolderOpen, Mail } from 'lucide-react';

interface CommandItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  keywords: string[];
}

const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  const commands: CommandItem[] = [
    {
      id: 'home',
      title: 'Home',
      description: 'Go to the hero section',
      icon: <Home className="w-4 h-4" />,
      action: () => {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      },
      keywords: ['home', 'hero', 'start', 'top']
    },
    {
      id: 'about',
      title: 'About Me',
      description: 'Learn more about my background',
      icon: <User className="w-4 h-4" />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      },
      keywords: ['about', 'bio', 'background', 'me']
    },
    {
      id: 'skills',
      title: 'Skills & Technologies',
      description: 'View my technical skills',
      icon: <Code className="w-4 h-4" />,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      },
      keywords: ['skills', 'technologies', 'tech', 'code', 'programming']
    },
    {
      id: 'experience',
      title: 'Experience',
      description: 'Explore my work experience and education',
      icon: <Briefcase className="w-4 h-4" />,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      },
      keywords: ['experience', 'work', 'career', 'education', 'timeline']
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Check out my projects',
      icon: <FolderOpen className="w-4 h-4" />,
      action: () => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      },
      keywords: ['portfolio', 'projects', 'work', 'examples', 'showcase']
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch with me',
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      },
      keywords: ['contact', 'email', 'reach', 'touch', 'message']
    }
  ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput 
        placeholder="Type a command or search..." 
        className="border-none focus:ring-0"
      />
      <CommandList className="max-h-[400px]">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {commands.map((command) => (
            <CommandItem
              key={command.id}
              value={`${command.title} ${command.description} ${command.keywords.join(' ')}`}
              onSelect={command.action}
              className="flex items-center gap-3 px-4 py-3 cursor-pointer"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-muted rounded-md">
                {command.icon}
              </div>
              <div className="flex-1">
                <div className="font-medium">{command.title}</div>
                <div className="text-sm text-muted-foreground">{command.description}</div>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
      <div className="border-t border-border p-3">
        <div className="flex items-center justify-center text-xs text-muted-foreground">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
          <span className="ml-2">to open • </span>
          <span className="text-xs">ESC</span>
          <span className="ml-1">to close</span>
        </div>
      </div>
    </CommandDialog>
  );
};

export default CommandPalette;