import { useState } from "react";
import "./Toggle.css";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

const handleToggle = ()=>{
    setIsOn(!isOn)
}
  return (
    <div className="toggle-switch" style={{backgroundColor: isOn ? "#4caf50" : "#f44336" }}  onClick={handleToggle}>
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
};

export default Toggle;
