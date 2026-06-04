import { Bell, Lock, User, Palette, Globe } from 'lucide-react';

export function Settings() {
  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: User,
      items: [
        { label: 'Full Name', value: 'John Doe' },
        { label: 'Email Address', value: 'john@example.com' },
        { label: 'Job Title', value: 'Engineering Manager' },
        { label: 'Department', value: 'Engineering' },
      ],
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Email Notifications', toggle: true, enabled: true },
        { label: 'Push Notifications', toggle: true, enabled: false },
        { label: 'Project Updates', toggle: true, enabled: true },
        { label: 'Team Mentions', toggle: true, enabled: true },
      ],
    },
    {
      title: 'Privacy & Security',
      icon: Lock,
      items: [
        { label: 'Two-Factor Authentication', toggle: true, enabled: false },
        { label: 'Profile Visibility', value: 'Team Only' },
        { label: 'Activity Status', toggle: true, enabled: true },
      ],
    },
    {
      title: 'Appearance',
      icon: Palette,
      items: [
        { label: 'Theme', value: 'Light' },
        { label: 'Compact Mode', toggle: true, enabled: false },
        { label: 'Sidebar Position', value: 'Left' },
      ],
    },
    {
      title: 'Language & Region',
      icon: Globe,
      items: [
        { label: 'Language', value: 'English (US)' },
        { label: 'Timezone', value: 'UTC-8 (Pacific Time)' },
        { label: 'Date Format', value: 'MM/DD/YYYY' },
      ],
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <h1 className="text-3xl font-semibold text-slate-900">Settings</h1>
        <p className="text-slate-600 mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-4xl space-y-6">
          {settingsSections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="bg-white border border-slate-200 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0"
                    >
                      <span className="text-slate-700">{item.label}</span>
                      {item.toggle ? (
                        <button
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            item.enabled ? 'bg-blue-600' : 'bg-slate-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              item.enabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      ) : (
                        <span className="text-slate-900 font-medium">
                          {item.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200">
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Edit {section.title}
                  </button>
                </div>
              </div>
            );
          })}

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-900 mb-2">
              Danger Zone
            </h2>
            <p className="text-sm text-red-700 mb-4">
              Irreversible actions that will affect your account
            </p>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-white border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors">
                Reset All Settings
              </button>
              <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
