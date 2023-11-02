import DevCard from "../components/DevCard";
import gamehub from "../assets/gamehub.png";

const DevPage = () => {
  return (
    <>
      <DevCard
        name="Gamehub"
        description="A lite version of rawg.io, a game discovery website."
        link="/game-hub"
        image={gamehub}
      />
    </>
  );
};

export default DevPage;
