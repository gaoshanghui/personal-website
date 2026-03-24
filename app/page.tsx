import { Button } from "./components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center bg-background px-(--size-space-16)">
      <div className="flex w-full flex-col gap-(--size-space-8) pb-(--size-space-20)">
        <div className="flex w-full flex-col gap-(--size-space-4)">
          <h1 className="text-display">Hi, I’m Shanghui Gao,</h1>
          <p className="text-body-l whitespace-pre-line text-(--color-text-secondary)">
            {"a designer with a systems and implementation mindset. \nMy work spans product experience, design systems, and emerging AI workflows."}
          </p>
        </div>
        <div>
          <Button
            href="https://www.linkedin.com/in/gaoshanghui"
            rel="noreferrer"
            target="_blank"
          >
            View LinkedIn
          </Button>
        </div>
      </div>
      <p className="text-body-xs text-(--color-text-secondary)">
        This site is actively being redesigned and improved.
      </p>
    </main>
  );
}
