import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetail({piece}) {
  
  return (
    <div>
      <Image width={400} height={400} src={piece.imageSource} alt={piece.name} />
      <h2>{piece.name}</h2>
      <h3>Artist: {piece.artist}</h3>
      <p>Year: {piece.year}</p>
      <p>Genre: {piece.genre}</p>
      <Link href="/art-pieces">
        Back to Art Gallery
      </Link>
    </div>
  );
}