import ArtPiecePreview from "@/components/ArtPiecePreview";
import Link from "next/link";

export default function List({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
          <ArtPiecePreview piece={piece} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
