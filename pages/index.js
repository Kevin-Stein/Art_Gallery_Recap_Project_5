
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({pieces}) {
  return (
    <>
      <h1>Random Art</h1>
      <Spotlight pieces={pieces} />
    </>
  );
}
