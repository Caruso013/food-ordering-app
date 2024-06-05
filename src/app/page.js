import Link from "next/link";

export default function Home() {
  return (
   <header>
    <Link className="text-red-600 font-semibold text-2xl" href={''}>Pizzaria</Link>
    <nav>
      <Link href={''}>Home</Link>
      <Link href={''}>Menu</Link>
      <Link href={''}>About</Link>
      <Link href={''}>Contact</Link>
      <Link href={''}>Login</Link>
    </nav>
   </header>
  );
}
