import { Button } from "./components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="flex flex-col gap-6">
        <Button>View LinkedIn</Button>
        <Button variant="secondary">View LinkedIn</Button>
      </div>
    </main>
  );
}
