import ArtPieces from "@/components/ArtPieces";

export default function Favorites({ pieces, onToggleFavorite }) {
    return (
     <ArtPieces pieces={pieces} onToggleFavorite={onToggleFavorite}/>
    );
  }