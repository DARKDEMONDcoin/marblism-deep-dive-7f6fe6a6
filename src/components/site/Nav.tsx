import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/use-reveal";

const links = [
  { label: "الموظفون", href: "#employees" },
  { label: "المزايا", href: "#features" },
  { label: "كيف يعمل", href: "#how" },
  { label: "الأسعار", href: "#pricing" },
  { label: "الأسئلة", href: "#faq" },
];

export function Nav() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-border/70 py-2 text-foreground shadow-card"
          : "py-4 text-white",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5">
        <a href="#top" className="group flex items-center gap-2.5">
          <span
            className="grid size-9 place-items-center rounded-xl text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-aurora)" }}
          >
            <Sparkles className="size-4.5" strokeWidth={2.4} />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight">سهل</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative rounded-lg px-3.5 py-2 text-[0.95rem] font-medium transition-colors",
                  scrolled ? "text-ink-soft hover:text-primary" : "text-white/85 hover:text-white",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#pricing"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              scrolled ? "text-ink-soft hover:text-primary" : "text-white/85 hover:text-white",
            )}
          >
            تسجيل الدخول
          </a>
          <a
            href="#cta"
            className={cn(
              "group relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-bold transition-transform duration-300 hover:-translate-y-0.5",
              scrolled ? "bg-foreground text-background" : "bg-white text-ink",
            )}
          >
            <span className="relative z-10">ابدأ مجاناً</span>
            <span
              className="absolute inset-0 -translate-x-full opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
              style={{ backgroundImage: "var(--gradient-aurora)" }}
            />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
          className={cn(
            "grid size-10 place-items-center rounded-xl border md:hidden",
            scrolled ? "border-border" : "border-white/30 text-white",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-400 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-4 mt-3 space-y-1 rounded-2xl border border-border bg-card p-3 shadow-card">
          {links.map((l) => (
            <li key={l.href}>
              <a
                onClick={() => setOpen(false)}
                href={l.href}
                className="block rounded-xl px-3 py-2.5 font-medium hover:bg-secondary"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              onClick={() => setOpen(false)}
              href="#cta"
              className="mt-1 block rounded-xl bg-foreground px-3 py-2.5 text-center font-bold text-background"
            >
              ابدأ مجاناً
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
