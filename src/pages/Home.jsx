import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Download, 
  ExternalLink, 
  Mail, 
  Linkedin,
  Github,
  Calendar,
  Users,
  Award,
  Coffee,
  Camera,
  Plane,
  Music,
  Book
} from 'lucide-react';

import HeroSection from '../components/brand/HeroSection';
import CurrentRoleSection from '../components/brand/CurrentRoleSection';
import TimelineSection from '../components/brand/TimelineSection';
import ProjectsSection from '../components/brand/ProjectsSection';
import LeadershipSection from '../components/brand/LeadershipSection';
import ContactSection from '../components/brand/ContactSection';

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Sections */}
      <HeroSection />
      <CurrentRoleSection />
      <TimelineSection />
      <ProjectsSection />
      <LeadershipSection />
      <ContactSection />
    </div>
  );
}