import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col justify-end">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="flex flex-col h-full w-full items-center justify-center gap-10 p-10">
        <span className="text-center text-4xl font-semibold">
            Please sign in above
          </span>
          <figure className="flex flex-col items-start">
            <Image
              src="/album_sharing_illustration.jpg"
              alt="Album sharing illustration"
              width={384}
              height={384}
              className="rounded-2xl"
            />
            <figcaption className="italic text-sm">
              Image by{" "}
              <a
                href="https://www.freepik.com/author/vectorjuice"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                vectorjuice
              </a>{" "}
              on{" "}
              <a
                href="https://www.freepik.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Freepik
              </a>
            </figcaption>
          </figure>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
