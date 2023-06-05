import '../assets/VolumeSlider.scss';

function VolumeSlider(props) {
  return <>
    <div className="volume-slider">
      <input
        disabled={!props.onPower}
        type="range"
        min="0"
        max="100"
        value={props.sliderValue}
        onChange={props.handleChange}
      />
    </div>
  </>
}

export default VolumeSlider;