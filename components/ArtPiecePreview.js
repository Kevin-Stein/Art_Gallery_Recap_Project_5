import Image from "next/image";

export default function ArtPiecePreview({ image, name, artist }) {
  return (
    <div>
      <Image width={200} height={140} src={image} alt={name} />
      <h2>{name}</h2>
      <p>{artist}</p>
    </div>
  );
}
