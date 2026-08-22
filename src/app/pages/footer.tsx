import { SocialMediaIconNoBorder } from "@/components/socialMediaIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="text-center p-10 bg-ink-950 text-gray-100">
        <div className="py-1">
          <h3 className="text-2xl md:text-3xl font-Poppins_SemiBold text-gray-200">
            Rayen Oueslati
          </h3>
        </div>
        <div className="text-2xl md:text-3xl flex justify-center gap-4 py-8 ">
          <SocialMediaIconNoBorder/>
        </div>
        <div className="max-w-7xl mx-auto font-mono text-xs text-gray-500">
          <span>{"// EOF"}</span> · © 2026 Rayen Oueslati · built with Next.js
        </div>
      </div>
    </footer>
  );
}
