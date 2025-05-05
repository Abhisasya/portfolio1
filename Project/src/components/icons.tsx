import React from 'react';
import { Github as LucideGithub, Linkedin as LucideLinkedin, X as LucideX } from 'lucide-react';

export const Linkedin = (props: React.SVGProps<SVGSVGElement>) => {
  return <LucideLinkedin {...props} />;
};

export const Github = (props: React.SVGProps<SVGSVGElement>) => {
  return <LucideGithub {...props} />;
};

export const Twitter = (props: React.SVGProps<SVGSVGElement>) => {
  return <LucideX {...props} />;
};
