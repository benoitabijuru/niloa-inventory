"use client";
import { Shirt } from "lucide-react";
import Link from "next/link";

interface OptionCardProps {
  optionData: {
    title: string;
    description: string;
    link: string;
    linkTitle: string;
    enabled: boolean;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
}

const OptionCard: React.FC<OptionCardProps> = ({ optionData }) => {
  const { title, description, link, linkTitle, enabled, icon: Icon } = optionData;

  return (
    <div className="shadow-xl bg-white flex flex-col items-center justify-center gap-4 m-8 p-4 rounded">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <div className="w-36 h-36 flex items-center justify-center">
        {Icon ? <Icon className="w-36 h-36 text-blue-500" /> : <Shirt className="w-36 h-36 text-blue-500" />}
      </div>
      <p className="text-gray-600 text-sm line-clamp-1">{description}</p>
      {enabled ? (
        <Link
          href={link}
          className="py-2 rounded bg-blue-600 px-3 inline-flex text-white items-center space-x-2 hover:bg-blue-700 transition"
        >
          {linkTitle}
        </Link>
      ) : (
        <button className="py-2 rounded bg-blue-600 px-3 flex items-center text-white hover:bg-blue-700 transition">
          Enable
        </button>
      )}
    </div>
  );
};

export default OptionCard;
