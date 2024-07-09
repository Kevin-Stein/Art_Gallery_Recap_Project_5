import ArtPieces from "@/components/ArtPieces";


export default function List({ pieces, RandomPiece }) {
  return (
    <>
      <h1>Art List</h1>
      <ArtPieces pieces={pieces} RandomPiece={RandomPiece} />
    </>
  );
}