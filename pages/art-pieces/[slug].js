import ArtPieceDetail from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";



export default function Slug({pieces}) {
  const router = useRouter();
  const { slug } = router.query;
  

  const onePiece = pieces.find((piece) => piece.slug === slug);
  
  return (
  <ArtPieceDetail piece={onePiece} />
)
}
