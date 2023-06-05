import { useState, useEffect } from 'react';
import '../assets/DrumButton.scss';

function DrumButton(props) {
  const [playing, setPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState(props.playedButton.heater_sound);

  useEffect(() => {
    function handleKeyDown(event) {
      if (
        event.key.toUpperCase() === props.playedButton.button_key.toUpperCase() &&
        props.onPower
      ) {
        handlePlaySound();
      }
    }
    function handleKeyUp(event) {
      if (event.key.toUpperCase() === props.playedButton.button_key.toUpperCase()) {
        setPlaying(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    setCurrentSound(() => {
      if (props.bankChecked) {
        return props.playedButton.heater_sound;
      } else {
        return props.playedButton.smooth_sound;
      }
    });

    // clean up function
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleKeyUp);
    };
  }, [props.playedButton.button_key, playing, props.onPower, props.sliderValue, props.bankChecked]);

  function handlePlaySound() {
    setPlaying(true);
    const audioElement = document.getElementById(
      props.playedButton.button_key.toUpperCase()
    );

    audioElement.volume = props.sliderValue / 100;
    audioElement.currentTime = 0;
    audioElement.play();
  }

  function handleClickButton() {
    if (props.onPower) {
      handlePlaySound();
      setPlaying(false);
      props.handleClickedButton(props.playedButton.button_key);
    }
  }

  return <>
    <div
      onClick={handleClickButton}
      className={`drum-pad ${playing ? "is-playing" : ""}`}
      id={props.playedButton.id}
    >
      <audio
        className="clip"
        id={props.playedButton.button_key}
        src={currentSound}
      ></audio>
      {props.playedButton.button_key}
    </div>
  </>
}

export default DrumButton;