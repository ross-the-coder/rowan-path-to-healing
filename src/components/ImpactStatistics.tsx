import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Heart, Phone, Users, Megaphone, MessageCircle, 
  UserCheck, GraduationCap, Presentation, School, 
  HandHeart, TrendingUp, Brain
} from 'lucide-react';

interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  icon: React.ElementType;
  category: 'services' | 'outreach' | 'education';
  description?: string;
}

const stats: StatItem[] = [
  {
    id: 'services',
    value: 8244,
    label: 'Services Provided',
    icon: Heart,
    category: 'services',
    description: 'Direct services to survivors and community members'
  },
  {
    id: 'hotline',
    value: 4093,
    label: 'Hotline Calls',
    icon: Phone,
    category: 'services',
    description: '24/7 crisis support and guidance'
  },
  {
    id: 'sessions',
    value: 1141,
    label: 'Sessions for',
    sublabel: '69 Clients in the Trauma Recovery Clinic',
    icon: Brain,
    category: 'services',
    description: 'Specialized trauma-focused therapy sessions'
  },
  {
    id: 'accompaniments',
    value: 74,
    label: 'Client Accompaniments',
    icon: HandHeart,
    category: 'outreach',
    description: 'Hospital and court support for survivors'
  },
  {
    id: 'outreach',
    value: 68,
    suffix: '%',
    label: 'Increase in Outreach Activities',
    icon: TrendingUp,
    category: 'outreach',
    description: 'Expanding our reach to more community members'
  },
  {
    id: 'counseling',
    value: 723,
    label: 'Counseling Clients',
    icon: MessageCircle,
    category: 'services',
    description: 'Individuals receiving ongoing counseling support'
  },
  {
    id: 'referrals',
    value: 224,
    label: 'Client Referrals',
    icon: UserCheck,
    category: 'outreach',
    description: 'Connecting survivors with additional resources'
  },
  {
    id: 'educated',
    value: 22100,
    label: 'People Educated',
    icon: GraduationCap,
    category: 'education',
    description: 'Community members reached through prevention programs'
  },
  {
    id: 'presentations',
    value: 795,
    label: 'Presentations',
    icon: Presentation,
    category: 'education',
    description: 'Educational sessions delivered across the community'
  },
  {
    id: 'schools',
    value: 45,
    label: 'Schools Reached',
    icon: School,
    category: 'education',
    description: 'Schools partnering with us for prevention education'
  }
];

const AnimatedCounter = ({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2000 
}: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const startValue = 0;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (value - startValue) * easeOutQuart);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);
  
  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const StatCard = ({ stat, index }: { stat: StatItem; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = stat.icon;
  
  const categoryColors = {
    services: 'from-primary/20 to-primary/5 hover:from-primary/30 hover:to-primary/10 border-primary/20',
    outreach: 'from-accent/20 to-accent/5 hover:from-accent/30 hover:to-accent/10 border-accent/20',
    education: 'from-secondary/20 to-secondary/5 hover:from-secondary/30 hover:to-secondary/10 border-secondary/20'
  };
  
  const iconColors = {
    services: 'text-primary bg-primary/10',
    outreach: 'text-accent bg-accent/10',
    education: 'text-secondary bg-secondary/10'
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden rounded-2xl p-6 
        bg-gradient-to-br ${categoryColors[stat.category]}
        border transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        cursor-pointer group
      `}
    >
      <div className="flex items-start gap-4">
        <motion.div 
          className={`p-3 rounded-xl ${iconColors[stat.category]}`}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        
        <div className="flex-1">
          <div className="text-3xl md:text-4xl font-seasons font-bold text-foreground mb-1">
            <AnimatedCounter 
              value={stat.value} 
              suffix={stat.suffix} 
              prefix={stat.prefix}
            />
          </div>
          <div className="font-roboto font-medium text-foreground/80">
            {stat.label}
          </div>
          {stat.sublabel && (
            <div className="font-roboto text-sm text-muted-foreground mt-1">
              {stat.sublabel}
            </div>
          )}
        </div>
      </div>
      
      {/* Description overlay on hover */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="text-sm font-roboto text-muted-foreground mt-4 pt-4 border-t border-foreground/10">
          {stat.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const ImpactStatistics = () => {
  const categories = [
    { id: 'services', label: 'Direct Services', icon: Heart },
    { id: 'outreach', label: 'Community Outreach', icon: Megaphone },
    { id: 'education', label: 'Prevention Education', icon: GraduationCap }
  ] as const;

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-seasons font-normal mb-4">
            Our Impact
          </h2>
          <p className="text-lg font-roboto text-muted-foreground max-w-2xl mx-auto">
            July 1, 2024 — June 30, 2025
          </p>
        </motion.div>

        {/* Category Labels */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div 
                key={cat.id} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-sm font-roboto"
              >
                <IconComp className="h-4 w-4" />
                <span>{cat.label}</span>
              </div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        {/* Featured Stat - Education */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-secondary via-secondary/90 to-secondary rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div>
              <div className="text-5xl md:text-6xl font-seasons font-bold mb-2">
                <AnimatedCounter value={22100} />
              </div>
              <div className="text-lg font-roboto opacity-90">people educated through</div>
            </div>
            <div className="hidden md:block w-px h-20 bg-white/20" />
            <div>
              <div className="text-5xl md:text-6xl font-seasons font-bold mb-2">
                <AnimatedCounter value={795} />
              </div>
              <div className="text-lg font-roboto opacity-90">presentations in</div>
            </div>
            <div className="hidden md:block w-px h-20 bg-white/20" />
            <div>
              <div className="text-5xl md:text-6xl font-seasons font-bold mb-2">
                <AnimatedCounter value={45} />
              </div>
              <div className="text-lg font-roboto opacity-90">schools</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStatistics;
