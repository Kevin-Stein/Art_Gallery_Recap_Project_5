import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledImage = styled(Image)`
  padding-top: 2rem;
`;
const StyledH2 = styled.h2`
  margin: 0;
`;

const StyledImageDiv = styled.div`

  position: relative;
  width: 100vw;
  height: 100vw;
`;

export default function ArtPieceDetail({ piece }) {
  return (
    <>
      <StyledImageDiv>
        <StyledImage
          fill={true}
          sizes="100vw"
          objectFit="contain"
          src={piece.imageSource}
          alt={piece.name}
        />
      </StyledImageDiv>
      <div>
        <StyledH2>{piece.name}</StyledH2>
        <h3>Artist: {piece.artist}</h3>
        <p>Year: {piece.year}</p>
        <p>Genre: {piece.genre}</p>
        <Link href="/art-pieces">Back to Art Gallery</Link>
      </div>
    </>
  );
}
