import { Songs } from "../assets/songs";
import { usePlayer } from "../hooks/usePlayer";

const Player = () => {
  const { song } = usePlayer();
  return (
    <div>
      <audio src={Songs[song].song} controls />
      {Songs[song].title}
    </div>
  );
};

export default Player;
