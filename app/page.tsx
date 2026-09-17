export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#101010] px-6 text-[#f4f0e8]">
      <section className="w-full max-w-2xl text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#b9b1a3]">
          Project Zero
        </p>
        <h1 className="text-5xl font-medium tracking-[-0.04em] sm:text-7xl">
          Building something from scratch.
        </h1>
        <button
          type="button"
          className="mt-10 rounded-full bg-[#f4f0e8] px-7 py-3 text-base font-medium text-[#101010] transition-colors hover:bg-[#d8d0c2] focus:outline-none focus:ring-2 focus:ring-[#f4f0e8] focus:ring-offset-2 focus:ring-offset-[#101010]"
        >
          Explore
        </button>
      </section>
    </main>
  );
}
