import { TrendingUp, LayoutGrid } from 'lucide-react';

type SidebarProps = {
  onAllClick: () => void;
  onTrendingClick: () => void;
  activeView: 'all' | 'trending';
};

export const Sidebar = ({ onAllClick, onTrendingClick, activeView }: SidebarProps) => {
  return (
    <aside className="w-64 bg-gray-900 border-r border-purple-900/30 min-h-[calc(100vh-73px)] sticky top-[73px]">
      <div className="p-4 space-y-1">
        <button
          onClick={onAllClick}
          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all text-sm ${
            activeView === 'all'
              ? 'text-purple-400 bg-purple-950/50 shadow-lg shadow-purple-900/20 border border-purple-800/30'
              : 'text-gray-400 hover:text-purple-400 hover:bg-gray-800/50'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span className="font-medium text-xs">All</span>
        </button>

        <button
          onClick={onTrendingClick}
          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all text-sm ${
            activeView === 'trending'
              ? 'text-purple-400 bg-purple-950/50 shadow-lg shadow-purple-900/20 border border-purple-800/30'
              : 'text-gray-400 hover:text-purple-400 hover:bg-gray-800/50'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span className="font-medium text-xs">Trending</span>
        </button>
      </div>
    </aside>
  );
};
