import Link from "next/link";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  width: 100vw;
  height: 3rem;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  position: fixed;
  bottom: 0;
`;

const StyledList = styled.li`
  width: 100%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: cadetblue;
  height: 100%;
  width: 100%;
  color: antiquewhite;
  font-size: 1.1rem;
`;

export default function Navigation() {
  return (
    <StyledUl>
      <StyledList>
        <StyledLink href="/">Spotlight</StyledLink>
      </StyledList>
      <StyledList>
        <StyledLink href="/art-pieces">Art Gallery</StyledLink>
      </StyledList>
      <StyledList>
        <StyledLink href="/favorites">Favorites</StyledLink>
      </StyledList>
    </StyledUl>
  );
}
