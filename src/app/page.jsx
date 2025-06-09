import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-500 to-slate-900 p-8">
        <Link href="http://localhost:3000/epic">EPIC: The Musical</Link>
        <div className="max-w-[60%] mx-auto">
          {/* Loading header skeleton */}
          <div className="h-12 bg-gradient-to-r from-blue-100/20 to-slate-50/20 rounded-lg animate-pulse mb-12"></div>

          {/* Loading grid skeleton */}
          <div className="flex flex-col">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-32 bg-gradient-to-br mt-10 from-white/10 to-white/5 rounded-xl animate-pulse"
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
