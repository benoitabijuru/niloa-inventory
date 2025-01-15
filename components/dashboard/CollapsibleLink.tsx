import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// Define the props type
interface CollapsibleLinkProps {
  href: string; // `href` should be a string
  title: string; // `title` should also be a string
}

const CollapsibleLink: React.FC<CollapsibleLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-between pl-8 pr-4 hover:bg-blue-800 transition-all duration-300 py-2 rounded-md space-x-3"
    >
      <span className="text-sm">{title}</span>
      <PlusCircle className="w-4 h-4" />
    </Link>
  );
};

export default CollapsibleLink;
