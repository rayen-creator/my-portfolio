import { SocialMediaIconNoBorder } from "@/components/socialMediaIcon";

export default function Footer() {
  return (
    <footer>
      <div className="text-center p-10  dark: text-gray-100 bg-black dark:bg-gray-900">
        <div className="py-1">
          <h3 className="text-3xl md:text-3xl font-bold text-gray-300">Rayen Oueslati</h3>
        </div>
        <div className="text-2xl md:text-3xl flex justify-center gap-4 py-10 ">
          <SocialMediaIconNoBorder/>
        </div>
        <div className="max-w-7xl mx-auto">
        © Copyright 2023. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
