import { Mail, Phone, MoreVertical, UserPlus } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  avatar: string;
  status: 'active' | 'away' | 'offline';
  projects: number;
}

const mockTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@example.com',
    role: 'Product Designer',
    department: 'Design',
    avatar: 'SC',
    status: 'active',
    projects: 5,
  },
  {
    id: '2',
    name: 'Mike Johnson',
    email: 'mike.j@example.com',
    role: 'Senior Developer',
    department: 'Engineering',
    avatar: 'MJ',
    status: 'active',
    projects: 8,
  },
  {
    id: '3',
    name: 'Alex Kim',
    email: 'alex.kim@example.com',
    role: 'Backend Engineer',
    department: 'Engineering',
    avatar: 'AK',
    status: 'away',
    projects: 4,
  },
  {
    id: '4',
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    role: 'Frontend Developer',
    department: 'Engineering',
    avatar: 'EW',
    status: 'active',
    projects: 6,
  },
  {
    id: '5',
    name: 'David Martinez',
    email: 'david.m@example.com',
    role: 'DevOps Engineer',
    department: 'Engineering',
    avatar: 'DM',
    status: 'offline',
    projects: 3,
  },
  {
    id: '6',
    name: 'Lisa Anderson',
    email: 'lisa.a@example.com',
    role: 'Marketing Manager',
    department: 'Marketing',
    avatar: 'LA',
    status: 'active',
    projects: 4,
  },
  {
    id: '7',
    name: 'Tom Brown',
    email: 'tom.brown@example.com',
    role: 'Content Strategist',
    department: 'Marketing',
    avatar: 'TB',
    status: 'away',
    projects: 2,
  },
  {
    id: '8',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Engineering Manager',
    department: 'Engineering',
    avatar: 'JD',
    status: 'active',
    projects: 10,
  },
];

export function Team() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-slate-400';
      default:
        return 'bg-slate-400';
    }
  };

  const departments = Array.from(new Set(mockTeam.map((m) => m.department)));

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Team</h1>
            <p className="text-slate-600 mt-1">
              Manage your team members and their roles
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <UserPlus className="w-5 h-5" />
            Add Member
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-8">
        {departments.map((department) => {
          const members = mockTeam.filter((m) => m.department === department);
          
          return (
            <div key={department} className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                {department} ({members.length})
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                          {member.avatar}
                        </div>
                        <div
                          className={`absolute bottom-0 right-0 w-4 h-4 ${getStatusColor(
                            member.status
                          )} rounded-full border-2 border-white`}
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-slate-900">
                              {member.name}
                            </h3>
                            <p className="text-sm text-slate-600">{member.role}</p>
                          </div>
                          <button className="p-1 hover:bg-slate-100 rounded transition-colors">
                            <MoreVertical className="w-5 h-5 text-slate-400" />
                          </button>
                        </div>
                        
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Mail className="w-4 h-4" />
                            <span className="truncate">{member.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Phone className="w-4 h-4" />
                            <span>+1 (555) 123-4567</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                          <span className="text-sm text-slate-600">
                            {member.projects} active projects
                          </span>
                          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
