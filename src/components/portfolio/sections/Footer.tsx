export function Footer() {
  return (
    <footer className="relative py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md grad-border glass text-[11px] font-bold text-gradient">TC</span>
            <span>© {new Date().getFullYear()} Tejesh Chintada</span>
          </div>
          <div className="text-center md:text-right">
            Designed &amp; Developed by{" "}
            <span className="text-gradient font-medium">Tejesh Chintada</span>
          </div>
        </div>
      </div>
    </footer>
  );
}