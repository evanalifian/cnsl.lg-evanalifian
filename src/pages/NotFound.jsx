import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-pureblack p-6 text-center">
      <div className="w-full max-w-md space-y-8">
        {/* Status Code */}
        <div className="space-y-2">
          <div className="flex justify-center text-white/20">
            <AlertTriangle size={64} strokeWidth={1} />
          </div>
          <h1 className="font-mono text-8xl font-bold tracking-tighter text-white">
            404
          </h1>
          <p className="font-mono text-sm tracking-[0.3em] text-darkgray-400 uppercase">
            resource_not_found
          </p>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-xl font-light text-white">
            Access Denied or Path Unknown
          </h2>
          <p className="text-sm leading-relaxed font-light text-darkgray-500">
            The endpoint you are trying to reach does not exist in the current
            system registry. Please return to the core directory.
          </p>
        </div>

        {/* Action */}
        <div className="pt-4">
          <a
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white bg-white px-8 py-4 font-mono text-xs font-bold tracking-widest text-black transition-all duration-300 hover:bg-gray-200"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            RETURN_TO_HOME
          </a>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="fixed bottom-12 font-mono text-[10px] tracking-widest text-darkgray-600 uppercase">
        System Core // Evan Alifian // 2026
      </div>
    </div>
  );
}
