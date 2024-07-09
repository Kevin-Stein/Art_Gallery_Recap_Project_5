import Image from "next/image";

export default function ArtPiecePreview({piece}) {
  console.log(piece)
  return (
    <div>
      <Image width={200} height={140} src={piece.imageSource} alt={piece.name} />
      <h2>{piece.name}</h2>
      <p>{piece.artist}</p>
    </div>
  );
}
