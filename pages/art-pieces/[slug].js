import ArtPieceDetail from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Slug(){

    const router = useRouter();
    const { slug } = router.query;
    const { data, error } = useSWR(
        "https://example-apis.vercel.app/api/art",
        fetcher
      );

      if (error) return <div>Failed to load</div>;
      if (!data) return <div>Loading...</div>;
      const onePiece = data.find((piece) => piece.slug === slug);
    return(
        <ArtPieceDetail piece={onePiece}/>
    )
}