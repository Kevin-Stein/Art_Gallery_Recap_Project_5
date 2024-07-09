import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "@/components/Spotlight";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function getRandomPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function HomePage() {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const RandomPiece = getRandomPiece(data);

  return (
    <>
      <h1>Random Art</h1>
      <Spotlight image={RandomPiece.imageSource} artist={RandomPiece.artist} />
      <h2>Art List</h2>
      <ArtPieces pieces={data} />
    </>
  );
}
