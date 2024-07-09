import Image from "next/image";



export default function Spotlight({ pieces }) {
  
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
 


  return (
    <div>
      <Image
        src={randomPiece.imageSource}
        alt={randomPiece.name}
        width={400}
        height={200}
      />
      <p>{randomPiece.artist}</p>
    </div>
  );
}
