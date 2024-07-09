import Image from 'next/image';

export default function Spotlight({ image, artist }){
  return (
    <div>
      <Image src={image} alt={artist} width={400} height={200}/>
      <p>{artist}</p>
    </div>
  );
};