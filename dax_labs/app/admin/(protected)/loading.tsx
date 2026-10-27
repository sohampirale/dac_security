export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-[#070e17] flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
      {/* Top glowing progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 overflow-hidden bg-white/5">
        <div className="h-full bg-gradient-to-r from-[#20d7b5] via-[#2f90ff] to-[#20d7b5] animate-pulse w-full shadow-[0_0_15px_#20d7b5]" />
      </div>

      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-[rgba(32,215,181,0.06)] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm text-center">
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-2xl bg-[rgba(32,215,181,0.1)] border border-[rgba(32,215,181,0.3)] flex items-center justify-center">
            <svg
              className="w-8 h-8 text-[#20d7b5] animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="opacity-85"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
          </div>
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#20d7b5] animate-ping" />
        </div>

        <h3 className="text-base font-bold text-white tracking-tight">
          Loading Security Console
        </h3>
        <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
          Retrieving live product catalogs and administrative data...
        </p>

        <div className="mt-6 w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#20d7b5] to-[#2f90ff] animate-progress origin-left rounded-full" />
        </div>
      </div>
    </div>
  );
}
