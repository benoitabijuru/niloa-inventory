import { X } from 'lucide-react';
import Link from 'next/link';

interface FormHeaderProps {
  title: string;
  href: string;
}

export default function FormHeader({ title, href }: FormHeaderProps) {
  return (
    <div className="flex items-center justify-between bg-white py-3 px-16">
      <h2 className="text-xl font-semibold">{title}</h2>
      <Link href={href} aria-label="Close">
        <X size={24} color="currentColor" />
      </Link>
    </div>
  );
}
