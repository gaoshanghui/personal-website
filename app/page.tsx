import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "The site is being updated and will be online soon.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl">
        Updating now. Launching soon.
      </h1>
    </main>
  );
}
