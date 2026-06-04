import {
  AlertCircle,
  Bell,
  CheckCircle2,
  ExternalLink,
  FileText,
  Filter,
  FolderKanban,
  Mail,
  Plus,
  Settings,
  TrendingUp,
  Users,
} from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { Input } from '../components/ui/input';
import { Progress } from '../components/ui/progress';
import { Separator } from '../components/ui/separator';
import { Slider } from '../components/ui/slider';
import { Switch } from '../components/ui/switch';

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

type Stat = {
  name: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: typeof TrendingUp;
  changeVariant: BadgeVariant;
};

const stats: Stat[] = [
  {
    name: 'Total Projects',
    value: '24',
    change: '+12%',
    trend: 'up',
    icon: FolderKanban,
    changeVariant: 'default',
  },
  {
    name: 'Active Tasks',
    value: '143',
    change: '+8%',
    trend: 'up',
    icon: CheckCircle2,
    changeVariant: 'secondary',
  },
  {
    name: 'Team Members',
    value: '32',
    change: '+4',
    trend: 'up',
    icon: Users,
    changeVariant: 'outline',
  },
  {
    name: 'Issues',
    value: '7',
    change: '-2',
    trend: 'down',
    icon: AlertCircle,
    changeVariant: 'destructive',
  },
];

type Project = {
  name: string;
  progress: number;
  status: string;
  statusVariant: BadgeVariant;
};

const projects: Project[] = [
  { name: 'Homepage Redesign', progress: 82, status: 'On track', statusVariant: 'default' },
  { name: 'Mobile App v2', progress: 64, status: 'In review', statusVariant: 'secondary' },
  { name: 'API Integration', progress: 38, status: 'At risk', statusVariant: 'destructive' },
  { name: 'Customer Portal', progress: 95, status: 'Shipping', statusVariant: 'outline' },
];

type Activity = {
  id: number;
  user: string;
  initials: string;
  action: string;
  actionVariant: BadgeVariant;
  target: string;
  time: string;
};

const recentActivity: Activity[] = [
  {
    id: 1,
    user: 'Sarah Chen',
    initials: 'SC',
    action: 'completed',
    actionVariant: 'default',
    target: 'Homepage Design',
    time: '2 hours ago',
  },
  {
    id: 2,
    user: 'Mike Johnson',
    initials: 'MJ',
    action: 'created',
    actionVariant: 'secondary',
    target: 'Mobile App Redesign',
    time: '4 hours ago',
  },
  {
    id: 3,
    user: 'Alex Kim',
    initials: 'AK',
    action: 'commented',
    actionVariant: 'outline',
    target: 'API Integration',
    time: '5 hours ago',
  },
  {
    id: 4,
    user: 'Emma Wilson',
    initials: 'EW',
    action: 'blocked',
    actionVariant: 'destructive',
    target: 'Customer Portal',
    time: '1 day ago',
  },
];

export function Dashboard() {
  return (
    <div className="h-full overflow-auto">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-1">
              Welcome back! Here's what's happening with your projects.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Input
              type="search"
              placeholder="Search projects..."
              className="w-64"
            />
            <Button variant="outline" size="sm">
              <Filter />
              Filter
            </Button>
            <Button size="sm">
              <Plus />
              New Project
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        {/* Onboarding alert */}
        <Alert>
          <Bell />
          <AlertTitle>You have 3 tasks pending review</AlertTitle>
          <AlertDescription>
            Open the props panel on any component on this page to see its Code
            Connect descriptors render as enhanced controls.
          </AlertDescription>
        </Alert>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.name}>
                <CardHeader>
                  <CardDescription>{stat.name}</CardDescription>
                  <CardTitle className="text-3xl font-semibold">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant={stat.changeVariant}>
                    <TrendingUp
                      className={stat.trend === 'down' ? 'rotate-180' : ''}
                    />
                    {stat.change}
                  </Badge>
                </CardContent>
                <CardFooter className="text-sm text-slate-500 gap-2">
                  <Icon className="size-4" />
                  vs. last month
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Project progress + Recent activity */}
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Progress</CardTitle>
              <CardDescription>
                Live status across active workstreams.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-slate-900">
                      {project.name}
                    </span>
                    <Badge variant={project.statusVariant}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={project.progress} className="flex-1" />
                    <span className="text-sm text-slate-500 tabular-nums w-10 text-right">
                      {project.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="link" size="sm">
                View all projects
                <ExternalLink />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>What your team has been up to.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-0">
              {recentActivity.map((activity, index) => (
                <div key={activity.id}>
                  {index > 0 && <Separator className="my-3" />}
                  <div className="flex items-start gap-3">
                    <Avatar className="size-8">
                      <AvatarImage src="" alt={activity.user} />
                      <AvatarFallback className="text-xs font-semibold">
                        {activity.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-900 flex items-center gap-1.5 flex-wrap">
                        <span className="font-medium">{activity.user}</span>
                        <Badge variant={activity.actionVariant}>
                          {activity.action}
                        </Badge>
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick actions + Preferences */}
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common workflows, every Button variant on display.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start">
                <Plus />
                Create New Project
              </Button>
              <Button variant="secondary" className="w-full justify-start">
                <Users />
                Add Team Member
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText />
                Generate Report
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings />
                Configure Workspace
              </Button>
              <Button variant="destructive" className="w-full justify-start">
                <AlertCircle />
                Archive Inactive Projects
              </Button>
              <Button variant="link" className="w-full justify-start" disabled>
                Connect external integrations (coming soon)
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>
                Toggles, ranges, and inputs — each driven by a typed descriptor.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <p className="text-sm font-medium text-slate-900">
                    Email notifications
                  </p>
                  <p className="text-xs text-slate-500">
                    Weekly digest of project changes.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <p className="text-sm font-medium text-slate-900">
                    Slack mentions
                  </p>
                  <p className="text-xs text-slate-500">
                    Currently paused at the workspace level.
                  </p>
                </div>
                <Switch disabled />
              </div>

              <Separator />

              <div className="flex items-start gap-3">
                <Checkbox id="pref-push" defaultChecked className="mt-0.5" />
                <label
                  htmlFor="pref-push"
                  className="text-sm text-slate-900 leading-tight"
                >
                  Send push reminders for overdue tasks
                  <span className="block text-xs text-slate-500 mt-0.5">
                    Triggers a notification 24h before each due date.
                  </span>
                </label>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-900">
                    Activity threshold
                  </p>
                  <span className="text-sm text-slate-500 tabular-nums">75</span>
                </div>
                <Slider
                  defaultValue={[75]}
                  min={0}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <p className="text-xs text-slate-500">
                  Only surface projects with at least this much weekly activity.
                </p>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline" size="sm">
                Reset
              </Button>
              <Button size="sm">
                <Mail />
                Save preferences
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
