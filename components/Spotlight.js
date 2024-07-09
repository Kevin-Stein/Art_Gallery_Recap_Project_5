import Image from "next/image";



export default function Spotlight({ pieces }) {
  
  const randomPiece = Math.floor(Math.random() * pieces.length);
 
const piece = pieces[randomPiece]

  return (
    <div>
      <Image
        src={piece.imageSource}
        alt={piece.name}
        width={400}
        height={200}
      />
      <p>{piece.artist}</p>
    </div>
  );
}
