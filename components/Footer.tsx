import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-15 footer h-20 flex flex-col gap-5 justify-center items-center text-center">
      <div className="flex justify-center">
        <Link href="/" className="ml-4 color-white underline flex items-center">
          Головна
        </Link>
        <Link href="/about" className="ml-4 color-white underline flex items-center">
          Про нас
        </Link>
        <Link href="https://instagram.com/seoul.memo" className="ml-4 color-white underline flex items-center">
          Instagram
        </Link>
      </div>
      <p className="flex items-center text-center justify-center">© {new Date().getFullYear()} Seoul Memo. Всі права захищені.</p>
    </footer>
  );
}