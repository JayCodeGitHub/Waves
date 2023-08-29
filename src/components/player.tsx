import { useState, useRef, useEffect } from "react";
import { Songs } from "../assets/songs";
import { usePlayer } from "../hooks/usePlayer";

const Player = () => {
  const { song, setSong } = usePlayer();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currnetTime, setCurrentTime] = useState<number>(0);

  const audioPlayer = useRef<HTMLAudioElement | null>(null);
  const progressBar = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.onloadedmetadata = () => {
        setIsPlaying(false);
        const seconds = Math.floor(audioPlayer.current?.duration || 0);
        setDuration(seconds);
        if (progressBar.current != null) {
          progressBar.current!.max = seconds.toString();
        }
      };
    }
  }, []);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (audioPlayer.current) {
      if (!prevValue) {
        audioPlayer.current.play();
      } else {
        audioPlayer.current.pause();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioPlayer.current) {
      setCurrentTime(audioPlayer.current.currentTime);
      progressBar.current!.value = audioPlayer.current.currentTime.toString();
    }
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (audioPlayer.current) {
      audioPlayer.current!.currentTime = Number(newValue);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 py-10">
      <img src={Songs[song].cover} className=" rounded-full" />
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl font-bold">{Songs[song].title}</h2>
        <h3 className="text-lg text-gray-500">{Songs[song].author}</h3>
      </div>
      <div className="flex flex-col items-center gap-2">
        <audio
          ref={audioPlayer}
          src={Songs[song].song}
          controls
          onTimeUpdate={handleTimeUpdate}
          className="hidden"
          onEnded={() => setIsPlaying(false)}
        />
        <div className="flex gap-2">
          <div className=" w-12">{calculateTime(currnetTime)}</div>
          <input
            ref={progressBar}
            type="range"
            defaultValue={0}
            onChange={handleSliderChange}
            className=""
          />
          <div>{calculateTime(duration)}</div>
        </div>
      </div>
      <div className="flex gap-2">
        {Songs[song].id > 0 ? (
          <button onClick={() => setSong(song - 1)}>Back</button>
        ) : null}
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        {Songs[song].id < Songs.length - 1 ? (
          <button onClick={() => setSong(song + 1)}>Forward</button>
        ) : null}
      </div>
    </div>
  );
};

export default Player;
