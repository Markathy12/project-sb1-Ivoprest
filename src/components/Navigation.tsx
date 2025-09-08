import React from 'react';

/**
 * Props interface for Link component
 */
interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Custom Link component that handles smooth scrolling to sections
 * In a real app, this would use a router
 */
export const Link: React.FC<LinkProps> = ({ to, children, className }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Scroll to section or fallback to root
    const element = document.getElementById(to.replace('/', '')) || document.getElementById('root');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

/**
 * SmoothScroll component for handling smooth scrolling to page sections
 * Specifically designed for anchor links within the page
 */
export const SmoothScroll: React.FC<{ to: string; children: React.ReactNode; className?: string }> = ({
  to,
  children,
  className,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};