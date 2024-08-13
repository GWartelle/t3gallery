import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/06b74556-5f75-4996-a097-d34b0f31105f-qepajh.png",
  "https://utfs.io/f/9469487c-32de-458d-b3f5-54feef008e2f-tdx6zv.png",
  "https://utfs.io/f/dd5f4de5-cac6-4460-8c1d-88dd8d6354df-6of150.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
