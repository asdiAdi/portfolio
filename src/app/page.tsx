import Image from "next/image";
import Link from "next/link";
import MenuTechStack from "@/app/_components/menu-tech-stack";

// TODO: integrate this data to cms
const LANGUAGES = ["javascript", "typescript"];

export default function Home() {
  return (
    <div className="mt-20 px-4">
      {/* Heading */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
        {/* Avatar */}
        <div className="flex w-fit flex-col items-center justify-center gap-2">
          <Image
            className="rounded-full"
            src="/notion-avatar.png"
            alt="Vercel logomark"
            width={120}
            height={120}
          />

          <Link
            href="/contact"
            className="cursor-pointer rounded-md border-1 border-gray-300 px-2 text-nowrap dark:border-none"
          >
            <span className="mr-2 mb-0.5 inline-block rounded-full bg-green-600">
              <span className="block size-2 animate-ping rounded-full bg-green-600" />
            </span>
            Available for work!
          </Link>
        </div>

        {/* Description */}
        <div className="text-xl">
          <h1 className="mb-4 text-center text-3xl font-semibold md:text-left md:text-4xl">
            Hi, I&#39;m Carl Adi!
          </h1>
          <div className="px-12 text-justify md:p-0 md:text-left">
            I am a <b className="text-primary">Full Stack</b> developer
            specializing in modern web applications. Based in the Philippines,
            I&#39;m passionate about programming, constantly creating and
            learning new things in the field.
          </div>
        </div>
      </div>

      {/* Showcase */}
      <div className="mt-20">
        <h2 className="mb-8 text-center font-mono text-2xl font-bold">
          Project Showcase
        </h2>
        Project Cards Here
      </div>

      {/* Tech */}
      <div className="mt-20">
        <h2 className="mb-8 text-center font-mono text-2xl font-bold">
          Techstack
        </h2>
        <MenuTechStack techStack={LANGUAGES} title="Languages" />
      </div>
    </div>
  );
}
