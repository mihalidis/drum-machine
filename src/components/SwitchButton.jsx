import '../assets/SwitchButton.scss';

function SwitchButton(props) {
  const activeCls = props.checked
    ? props.bankButtonClass
      ? "is-active bank-heater"
      : "is-active"
    : props.bankButtonClass
    ? "bank-smooth"
    : "";

  return <>
    <button
      disabled={!props.onPower && props.bankButtonClass}
      className={`SlideBtn ${activeCls}`}
      onClick={props.handleToggle}
    >
      <span className="SlideBtn-knob"></span>
    </button>
  </>
}

export default SwitchButton;