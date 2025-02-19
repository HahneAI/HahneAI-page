export function MakeBadge() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex flex-col items-center justify-between p-3 shadow-lg">
        <span className="text-xs font-semibold text-white/90">Make</span>
        <div className="space-y-1">
          <div className="h-1 w-12 bg-white rounded-full" />
          <div className="h-1 w-9 bg-white rounded-full" />
          <div className="h-1 w-6 bg-white rounded-full" />
        </div>
        <span className="text-xs font-semibold text-white/90">Certified</span>
      </div>
    </div>
  );
}