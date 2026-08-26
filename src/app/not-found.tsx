import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="accent-label">404</p>
      <h1 className="mt-4 font-display text-5xl font-bold tracking-tighter">
        Lost in the stack.
      </h1>
      <p className="mt-4 max-w-sm text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist — or it was moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>
    </div>
  );
}
