import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";

interface FixedHeaderProps {
  newLink: string;
}

const FixedHeader: React.FC<FixedHeaderProps> = ({ newLink }) => {
  return (
    <div className="flex justify-between items-center py-5 px-4">
      <button type="button" className="text-2xl font-semibold text-gray-800">
        All Items
      </button>
      <div className="flex gap-4 items-center">
        {/* New */}
        <Link
          href={newLink}
          className="p-2 rounded-md px-4 bg-blue-600 flex items-center text-white hover:bg-blue-700 transition"
          aria-label="Create new item"
        >
          <Plus className="w-4 h-4" />
          <span>New</span>
        </Link>
        {/* Layout */}
        <div className="flex rounded-md overflow-hidden border border-gray-300">
          <button
            type="button"
            className="bg-gray-300 p-2 hover:bg-gray-400 transition"
            aria-label="Switch to list view"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="bg-gray-100 p-2 hover:bg-gray-200 transition"
            aria-label="Switch to grid view"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
        {/* More */}
        <button
          type="button"
          className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition"
          aria-label="More options"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
        {/* Help */}
        <button
          type="button"
          className="bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition"
          aria-label="Help"
        >
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default FixedHeader;
