import { Songs } from "../assets/songs";
import { usePlayer } from "../hooks/usePlayer";

const Player = () => {
  const { song } = usePlayer();
  return (
    <div>
      <audio autoPlay src={Songs[song].song} controls />
      <h1>{Songs[song].title}</h1>
      <h2>{Songs[song].author}</h2>
      <img src={Songs[song].cover} />
    </div>
  );
};

export default Player;
