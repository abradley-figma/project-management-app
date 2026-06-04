import { useState } from 'react';
import {
  Search,
  Filter,
  Plus,
  MoreVertical,
  Calendar,
  Users,
  Tag,
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'on-hold' | 'completed';
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  team: string[];
  progress: number;
  tags: string[];
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Complete overhaul of company website with new branding',
    status: 'active',
    priority: 'high',
    dueDate: '2026-04-15',
    team: ['Sarah', 'Mike', 'Alex'],
    progress: 65,
    tags: ['Design', 'Development'],
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Build iOS and Android apps for customer portal',
    status: 'active',
    priority: 'high',
    dueDate: '2026-05-20',
    team: ['John', 'Emma', 'David'],
    progress: 40,
    tags: ['Development', 'Mobile'],
  },
  {
    id: '3',
    name: 'Marketing Campaign Q2',
    description: 'Launch new product marketing campaign',
    status: 'on-hold',
    priority: 'medium',
    dueDate: '2026-04-01',
    team: ['Lisa', 'Tom'],
    progress: 25,
    tags: ['Marketing'],
  },
  {
    id: '4',
    name: 'API Integration',
    description: 'Integrate third-party payment APIs',
    status: 'active',
    priority: 'high',
    dueDate: '2026-03-30',
    team: ['Mike', 'John'],
    progress: 80,
    tags: ['Development', 'Backend'],
  },
  {
    id: '5',
    name: 'Customer Support Portal',
    description: 'Build internal support ticket system',
    status: 'completed',
    priority: 'medium',
    dueDate: '2026-03-10',
    team: ['Sarah', 'Emma'],
    progress: 100,
    tags: ['Development'],
  },
  {
    id: '6',
    name: 'Database Migration',
    description: 'Migrate from MongoDB to PostgreSQL',
    status: 'active',
    priority: 'low',
    dueDate: '2026-06-01',
    team: ['David', 'Alex'],
    progress: 15,
    tags: ['Backend', 'Infrastructure'],
  },
];

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');

  const filteredProjects = mockProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || project.status === statusFilter;
    const matchesPriority =
      priorityFilter === 'all' || project.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'on-hold':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low':
        return 'bg-slate-100 text-slate-800 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Projects</h1>
            <p className="text-slate-600 mt-1">
              Manage and track all your projects
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5" />
            New Project
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-2">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-9 pr-8 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="on-hold">On Hold</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="pl-9 pr-8 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white cursor-pointer"
              >
                <option value="all">All Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="flex-1 overflow-auto p-8">
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {project.name}
                    </h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded border capitalize ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status.replace('-', ' ')}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded border capitalize ${getPriorityColor(
                        project.priority
                      )}`}
                    >
                      {project.priority}
                    </span>
                  </div>
                  <p className="text-slate-600">{project.description}</p>
                </div>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Due: {project.dueDate}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{project.team.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-slate-600" />
                  <div className="flex gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-slate-100 text-slate-700 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Progress</span>
                  <span className="font-medium text-slate-900">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No projects found</p>
          </div>
        )}
      </div>
    </div>
  );
}
