"use client";

interface UserData {
  name: string;
  email: string;
  age?: number;
  country?: string;
  joined?: string;
  status?: string;
  bio?: string;
}

export default function UserDataPanel({ user }: { user: UserData }) {
  return (
    <div className="bg-[rgba(23,23,23,0.95)] text-white p-6 rounded-xl border border-white/10 shadow-xl w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">User Overview</h2>

      <div className="space-y-3">
        <PanelRow label="Name" value={user.name} />
        <PanelRow label="Email" value={user.email} />
        {user.age && <PanelRow label="Age" value={user.age} />}
        {user.country && <PanelRow label="Country" value={user.country} />}
        {user.joined && <PanelRow label="Joined" value={user.joined} />}
        {user.status && <PanelRow label="Status" value={user.status} />}
      </div>

      {user.bio && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold opacity-70">Bio</h3>
          <p className="text-sm mt-1 opacity-90">{user.bio}</p>
        </div>
      )}
    </div>
  );
}

function PanelRow({ label, value }: { label: string; value: any }) {
  return (
    <div className="flex justify-between border-b border-white/10 pb-2">
      <span className="text-sm opacity-70">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}
