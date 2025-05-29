import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-500 via-blue-300 to-slate-500 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Loading header skeleton */}
          <div className="h-12 bg-gradient-to-r from-blue-100/20 to-slate-50/20 rounded-lg animate-pulse mb-12"></div>

          {/* Loading grid skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-xl animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-red-900 flex items-center justify-center p-8">
        <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center">
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
          <h2 className="text-red-300 text-xl font-semibold mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-red-200/80">Error!</p>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
          <div className="text-purple-300 text-6xl mb-4">📚</div>
          <h2 className="text-white text-xl font-semibold mb-2">
            No myths found
          </h2>
          <p className="text-white/70">No data available for this collection</p>
        </div>
      </div>
    </>
  );
}
