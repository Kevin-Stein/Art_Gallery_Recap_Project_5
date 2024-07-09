import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  function getRandomPiece(pieces) {
    const randomPiece = Math.floor(Math.random() * pieces.length);
    return pieces[randomPiece];
  }

  return (
    <>
      <GlobalStyle />
        <Component
          {...pageProps}
          pieces={data}
          RandomPiece={getRandomPiece(data)}
          />
          <Layout>
      </Layout>
    </>
  );
}
