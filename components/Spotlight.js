import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
object-fit: cover;
width: 100%;
height: 100%;

`;
const StyledDiv = styled.div`

width: 100vw;
height: 500px;

`;

export default function Spotlight({ pieces }) {
  
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
 


  return (
    <StyledDiv>
      <StyledImage
        src={randomPiece.imageSource}
        alt={randomPiece.name}
        width={400}
        height={200}
      />
      <p>{randomPiece.artist}</p>
    </StyledDiv>
  );
}
