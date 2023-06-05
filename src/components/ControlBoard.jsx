import SwitchButton from './SwitchButton';
import VolumeSlider from './VolumeSlider';

function ControlBoard(props) {
  return <>
    <div className="control-board">
      <span className="control-board--switch-title">Power</span>
      <SwitchButton
        handleToggle={props.handlePowerChecked}
        checked={props.powerChecked}
      />
      <div id="display" className="control-board--info">
        {props.controlInfo}
      </div>
      <VolumeSlider
        sliderValue={props.sliderValue}
        handleChange={props.handleSliderChange}
        onPower={props.powerChecked}
      />
      <span className="control-board--switch-title">Bank</span>
      <SwitchButton
        handleToggle={props.handleBankChecked}
        checked={props.bankChecked}
        bankButtonClass={true}
        onPower={props.powerChecked}
      />
    </div>
  </>
}

export default ControlBoard;