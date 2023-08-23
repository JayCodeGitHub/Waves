import { usePlayer } from "../hooks/usePlayer";

const Player = () => {
  const { song } = usePlayer();
  return (
    <div>
      <audio src="/audio/1.mp3" controls />
      {song}
    </div>
  );
};

export default Player;
