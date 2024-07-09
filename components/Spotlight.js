import Image from "next/image";

export default function Spotlight({ RandomPiece }) {
  return (
    <div>
      <Image
        src={RandomPiece.imageSource}
        alt={RandomPiece.artist}
        width={400}
        height={200}
      />
      <p>{RandomPiece.artist}</p>
    </div>
  );
}
