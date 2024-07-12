import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  object-fit: cover;
`;
const StyledDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;
const StyledH4 = styled.h4`
  align-self: flex-start;
  margin-bottom: 0.3rem;
`;
const StyledP = styled.p`
  align-self: flex-end;
  margin-top: 0.3rem;
`;

export default function ArtPiecePreview({
  piece,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <StyledDiv>
      <StyledH4>{piece.name}</StyledH4>
      <StyledImage
        width={330}
        height={150}
        src={piece.imageSource}
        alt={piece.name}
      />
      <StyledP>by {piece.artist}</StyledP>
    </StyledDiv>
  );
}
