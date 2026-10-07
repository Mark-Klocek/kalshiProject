import Button from "@/components/button";


export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 text-center bg-white dark:bg-black">
        <div>My Kalshi Project</div>
        <Button text = "Kalshi" route = "/kalshi" />
      </main>
    </div>
  );
}
