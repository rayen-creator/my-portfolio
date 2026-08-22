import { AiFillGithub } from "react-icons/ai";
import Image, { type StaticImageData } from "next/image";
import { CiShare1 } from "react-icons/ci";

export default function Card({
  githublink,
  image,
  title,
  description,
  stack,
  demolink,
  client,
}: {
  githublink: string | null;
  image: StaticImageData;
  title: string;
  description: string;
  stack: React.ReactNode[];
  demolink: string | null;
  client?: { name: string; country: string; flag: string };
}) {
  return (
    <div className="h-[580px] rounded-md border border-gray-200 dark:border-white/10 bg-white dark:bg-ink-900 flex flex-col text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-sm">
      <div className="p-1 bg-gray-50 dark:bg-ink-800 rounded-t-md border-b border-gray-200 dark:border-white/10">
        <div className="flex justify-center p-1">
          <Image src={image} width={150} height={150} alt={title} />
        </div>
      </div>
      <div className="pt-4 px-7 pb-7 rounded-md flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center gap-2">
          {client && (
            <span
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-gray-500 dark:text-gray-400"
              title={client.country}
            >
              <span>{client.flag}</span>
              {client.name}
            </span>
          )}
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            {githublink && (
              <a
                className="text-gray-500 py-1 cursor-pointer hover:text-primary"
                href={githublink}
                target="_blank"
              >
                <AiFillGithub className="text-2xl" />
              </a>
            )}
            {demolink && (
              <a
                className="text-gray-500 py-1 cursor-pointer hover:text-primary"
                href={demolink}
                target="_blank"
              >
                <CiShare1 className="text-2xl" />
              </a>
            )}
          </div>
        </div>
        <h3 className="mt-2 font-mono text-left text-sm text-gray-900 dark:text-gray-100 lg:break-all">
          <span className="text-primary">rayen/</span>
          {title.trim().toLowerCase().replace(/\s+/g, "-")}
        </h3>
        <p className="py-3 font-Poppins_Regular text-sm text-justify text-gray-700 dark:text-gray-300 flex-1 line-clamp-4">
          {description}
        </p>
        <div className="mt-auto">
          <h4 className="pb-3 font-mono text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
            stack
          </h4>
          <div className="flex justify-center items-end flex-wrap gap-3 text-2xl lg:text-3xl">
            {stack &&
              stack.length > 0 &&
              stack.map((s, index) => (
                <div key={index}>
                  <p className="text-gray-500 dark:text-gray-400 py-1">{s}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
