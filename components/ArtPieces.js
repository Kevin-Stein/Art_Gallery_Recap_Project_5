import FavoriteButton from "@/components/FavoriteButton";
import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

const StyledUl = styled.ul`
  list-style: none;
`;

export default function ArtPieces({pieces, artPiecesInfo, onToggleFavorite,}) {
  return (
    <div>
      {pieces.map((piece) => (
        <div key={piece.slug}>
          <h3>{piece.name}</h3>
        <ArtPiecePreview piece={piece} onToggleFavorite={onToggleFavorite} isFavorite={artPiecesInfo.find((piece)=>piece.slug === slug).isFavorite}/>
        
        </div>
      ))}
    </div>
  );
}
