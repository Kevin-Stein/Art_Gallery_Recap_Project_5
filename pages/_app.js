import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find(
      (artPieceInfo) => artPieceInfo.slug === slug
    );

    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((piece) =>
          piece.slug === slug ? { isFavorite: !piece.isFavorite, slug: piece.slug } : piece
        )
      );
    }
    else{

      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={data}
          onToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </Layout>
    </>
  );
}
