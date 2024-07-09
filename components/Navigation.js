import Link from "next/link";
export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/SpotlightPage">Spotlight</Link>
      </li>
      <li>
        <Link href="/art-pieces">Pieces</Link>
      </li>
    </ul>
  );
}
