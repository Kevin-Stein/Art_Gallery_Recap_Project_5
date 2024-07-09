import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
<<<<<<< HEAD
    {pieces.map((piece) => (
      <li key={piece.slug}>
        <ArtPiecePreview
          image={piece.imageSource}
          name={piece.name}
          artist={piece.artist}
        />
      </li>
     ))}
  </ul>
=======
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview piece={piece} />
        </li>
      ))}
    </ul>
>>>>>>> 96dcb3c6ee5f3c3141f9c50dce44739009599db9
  );
}
