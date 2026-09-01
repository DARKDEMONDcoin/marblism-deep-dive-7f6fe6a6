import * as si from "simple-icons";
import { cn } from "@/lib/utils";

type Icon = { title: string; hex: string; path: string };

const map: Record<string, { icon?: Icon; label: string }> = {
  instagram: { icon: si.siInstagram, label: "إنستجرام" },
  x: { icon: si.siX, label: "إكس" },
  linkedin: { icon: si.siLinkedin, label: "لينكدإن" },
  tiktok: { icon: si.siTiktok, label: "تيك توك" },
  facebook: { icon: si.siFacebook, label: "فيسبوك" },
  youtube: { icon: si.siYoutube, label: "يوتيوب" },
  threads: { icon: si.siThreads, label: "ثريدز" },
  gmail: { icon: si.siGmail, label: "جيميل" },
  outlook: { icon: si.siGmail, label: "أوتلوك" },
  calendar: { icon: si.siGooglecalendar, label: "التقويم" },
  slack: { icon: si.siSlack, label: "سلاك" },
  notion: { icon: si.siNotion, label: "نوشن" },
  whatsapp: { icon: si.siWhatsapp, label: "واتساب" },
  hubspot: { icon: si.siHubspot, label: "هابسبوت" },
  sheets: { icon: si.siGooglesheets, label: "جوجل شيتس" },
  drive: { icon: si.siGoogledrive, label: "جوجل درايف" },
  wordpress: { icon: si.siWordpress, label: "ووردبريس" },
  shopify: { icon: si.siShopify, label: "شوبيفاي" },
  figma: { icon: si.siFigma, label: "فيجما" },
  canva: { icon: si.siCanva, label: "كانفا" },
  analytics: { icon: si.siGoogleanalytics, label: "جوجل أناليتكس" },
  "search-console": { icon: si.siGooglesearchconsole, label: "سيرش كونسول" },
  "meta-ads": { icon: si.siMeta, label: "إعلانات ميتا" },
  telegram: { icon: si.siTelegram, label: "تيليجرام" },
  stripe: { icon: si.siStripe, label: "سترايب" },
  salla: { icon: si.siShopify, label: "سلة" },
  zoom: { icon: si.siZoom, label: "زوم" },
};

export function appLabel(key: string) {
  return map[key]?.label ?? key;
}

export const appKeys = Object.keys(map);

export function AppIcon({
  name,
  className,
  colored = true,
}: {
  name: string;
  className?: string;
  colored?: boolean;
}) {
  const entry = map[name];
  if (!entry?.icon) {
    return (
      <span
        className={cn(
          "grid place-items-center rounded-md bg-secondary text-[0.6rem] font-bold",
          className,
        )}
      >
        {name.slice(0, 2)}
      </span>
    );
  }
  return (
    <svg
      role="img"
      aria-label={entry.label}
      viewBox="0 0 24 24"
      className={cn("size-5", className)}
      fill={colored ? `#${entry.icon.hex}` : "currentColor"}
    >
      <path d={entry.icon.path} />
    </svg>
  );
}

export function AppRow({
  apps,
  className,
  size = "size-4.5",
}: {
  apps: string[];
  className?: string;
  size?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {apps.map((a) => (
        <span
          key={a}
          title={appLabel(a)}
          className="grid size-9 place-items-center rounded-xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-0.5"
        >
          <AppIcon name={a} className={size} />
        </span>
      ))}
    </div>
  );
}
