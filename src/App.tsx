export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
          Cascade
        </h2>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Your project is ready!
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Start building by describing what you want in the chat. Try something like{" "}
            <span className="font-medium text-zinc-950 dark:text-zinc-50">
              "Add a navigation bar"
            </span>{" "}
            or{" "}
            <span className="font-medium text-zinc-950 dark:text-zinc-50">
              "Create a contact form"
            </span>
            .
          </p>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          You're currently looking at{" "}
          <code className="font-mono font-medium text-zinc-950 dark:text-zinc-50">
            src/App.tsx
          </code>
        </p>
      </main>
    </div>
  );
}
