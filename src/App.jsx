import { useState, useEffect } from 'react';
import ControlBoard from './components/ControlBoard';
import DrumButton from './components/DrumButton';
import './assets/App.scss';
import keyBoard from './constants/keyBoard';

function App() {
  const [pressedButton, setPressedButton] = useState("");
  const [powerChecked, setPowerChecked] = useState(true);
  const [bankChecked, setBankChecked] = useState(true);
  const [sliderValue, setSliderValue] = useState(50);
  const [controlInfo, setControlInfo] = useState("");

  
  // mounted
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      setPressedButton(event.key);
    });

    // clean up function
    return () => {
      document.removeEventListener("keydown", (event) => {
        setPressedButton(event.key);
      });
    };
  }, []);

  useEffect(() => {
    setControlInfo(bankChecked ? "Smooth Piano Kit" : "Heater Kit");
  }, [bankChecked]);

  useEffect(() => {
    if (pressedButton) {
      const buttonItem = keyBoard.find(
        (item) => item.button_key.toLowerCase() === pressedButton.toLowerCase()
      );
      setControlInfo(
        bankChecked ? buttonItem.heater_name : buttonItem.smooth_piano_name
      );
    }
  }, [pressedButton]);


  function handleSliderChange(e) {
    setSliderValue(e.target.value);
    setControlInfo(e.target.value);
  }

  function handleBankChecked() {
    setBankChecked(!bankChecked);
  }

  function handleClickedButton(key) {
    setPressedButton(key);
  }

  return <>
    <div className="drum-machine" id="drum-machine">
      <div className="keyboard">
        {keyBoard.map((playButton, index) => {
          return (
            <DrumButton
              playedButton={playButton}
              key={index}
              pressedButton={pressedButton}
              onPower={powerChecked}
              sliderValue={sliderValue}
              bankChecked={bankChecked}
              handleClickedButton={handleClickedButton}
            />
          );
        })}
      </div>
      <ControlBoard
        handleSliderChange={handleSliderChange}
        handleBankChecked={handleBankChecked}
        bankChecked={bankChecked}
        handlePowerChecked={(e) => {
          setPowerChecked(!powerChecked);
        }}
        powerChecked={powerChecked}
        sliderValue={sliderValue}
        controlInfo={controlInfo}
      />
    </div>
  </>
}

export default App
