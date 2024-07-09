import Image from "next/image";

export default function ArtPiecePreview({piece}) {
  console.log(piece)
  return (
    <div>
      <Image width={200} height={140} src={piece.imageSource} alt={piece.name} />
      <h4>{piece.name}</h4>
      <p>{piece.artist}</p>
    </div>
  );
}
