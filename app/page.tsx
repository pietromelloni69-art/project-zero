import InsightsForm from "./insights-form";

export default function Home() {
  return (
    <main className="bg-[#101010] text-[#f4f0e8]">
      <section className="flex min-h-screen items-center justify-center bg-[linear-gradient(to_bottom,#101010_0%,#101010_78%,#69645a_100%)] px-6 text-center">
        <div className="w-full max-w-2xl">
          <p className="mb-6 text-sm tracking-[0.3em] text-[#b9b1a3]">
            BE GUIDED BY OUR MENTORS
          </p>
          <h1 className="text-5xl font-medium tracking-[-0.04em] sm:text-7xl">
            Learning by building.
          </h1>
          <a
            href="#explore"
            className="mt-10 inline-block rounded-full bg-[#f4f0e8] px-7 py-3 text-base font-medium text-[#101010] transition-colors hover:bg-[#d8d0c2] focus:outline-none focus:ring-2 focus:ring-[#f4f0e8] focus:ring-offset-2 focus:ring-offset-[#101010]"
          >
            Explore
          </a>
        </div>
      </section>

      <section
        id="explore"
        className="relative flex min-h-screen items-center justify-center bg-[linear-gradient(to_bottom,#69645a_0%,#f4f0e8_26%,#f4f0e8_100%)] px-6 py-24 text-[#101010]"
      >
        <div className="w-full max-w-xl">
          <form>
            <fieldset>
              <legend className="text-2xl font-medium sm:text-3xl">
                Which sectors would you like to explore?
              </legend>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Finance",
                  "Sales",
                  "Marketing",
                  "Journalism",
                  "Events",
                  "Product",
                  "IT",
                  "Design",
                  "Policy & Public Affairs",
                  "Communications / PR",
                  "Research & Analytics",
                  "Resources & Data",
                  "HR",
                  "Legal",
                  "Education & Training",
                  "Entrepreneurship",
                ].map((sector) => (
                  <label key={sector} className="flex items-center gap-3 text-lg">
                    <input
                      type="checkbox"
                      name="sectors"
                      value={sector}
                      className="h-5 w-5 accent-[#101010]"
                    />
                    {sector}
                  </label>
                ))}
              </div>
              <label htmlFor="other-sector" className="mt-8 block text-lg">
                Any other?
              </label>
              <input
                id="other-sector"
                name="other-sector"
                type="text"
                placeholder="Write another sector"
                className="mt-2 w-full border-b-2 border-[#101010] bg-transparent px-0 py-3 text-lg outline-none placeholder:text-[#8d877d] focus:border-[#6f675b]"
              />
            </fieldset>
          </form>
          <a
            href="#insights"
            className="absolute bottom-8 right-6 rounded-full bg-[#101010] px-7 py-3 text-base font-medium text-[#f4f0e8] transition-colors hover:bg-[#3a3834] focus:outline-none focus:ring-2 focus:ring-[#101010] focus:ring-offset-2 focus:ring-offset-[#f4f0e8] sm:bottom-10 sm:right-10"
          >
            Continue
          </a>
        </div>
      </section>

      <section
        id="insights"
        className="flex min-h-screen items-center justify-center bg-[linear-gradient(to_bottom,#f4f0e8_0%,#ded8cc_20%,#ded8cc_100%)] px-6 py-24 text-[#101010]"
      >
        <div className="w-full max-w-xl">
          <InsightsForm />
        </div>
      </section>
    </main>
  );
}
