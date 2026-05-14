export function SiteFooter() {
  return (
    <footer className="bg-clay-ink text-clay-cream">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-display text-3xl font-bold">
            soft<span className="text-clay-pink">.</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-clay-cream/70">
            Made in Bangkok, worn anywhere.
          </p>
        </div>

        <nav aria-label="Social" className="flex gap-4 text-sm font-bold">
          <a href="#" className="rounded-full border-2 border-clay-cream/40 px-4 py-2 transition-colors hover:bg-clay-cream hover:text-clay-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay-cream focus-visible:ring-offset-2 focus-visible:ring-offset-clay-ink">
            instagram
          </a>
          <a href="#" className="rounded-full border-2 border-clay-cream/40 px-4 py-2 transition-colors hover:bg-clay-cream hover:text-clay-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay-cream focus-visible:ring-offset-2 focus-visible:ring-offset-clay-ink">
            tiktok
          </a>
          <a href="#" className="rounded-full border-2 border-clay-cream/40 px-4 py-2 transition-colors hover:bg-clay-cream hover:text-clay-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay-cream focus-visible:ring-offset-2 focus-visible:ring-offset-clay-ink">
            contact
          </a>
        </nav>
      </div>
      <div className="border-t border-clay-cream/15">
        <p className="mx-auto max-w-[1200px] px-5 py-5 text-xs text-clay-cream/60 lg:px-10">
          © 2026 soft. — made with care, sold with care.
        </p>
      </div>
    </footer>
  );
}
