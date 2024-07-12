import ArtPiecePreview from "@/components/ArtPiecePreview";

import Link from "next/link";
import styled from "styled-components";
import FavoriteHeart from "/images/heart.svg";



const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledLink = styled(Link) `
 text-decoration:none;
`;

export default function List({ pieces, onToggleFavorite}) {
  return (
   <>
      <h2>ART GALLERY</h2>
      <StyledUl>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <StyledLink href={`/art-pieces/${piece.slug}`}>
              <ArtPiecePreview piece={piece} onToggleFavorite={onToggleFavorite} isFavorite={artPiecesInfo((piece))}/>

           

             
            </StyledLink>
          </li>
        ))}
      </StyledUl>
   </>
  );
}
