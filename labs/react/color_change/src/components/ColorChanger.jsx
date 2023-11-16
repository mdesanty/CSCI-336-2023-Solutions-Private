import { useState } from "react";

function ColorChanger() {
  const [colorClass, setColorClass] = useState('bg-green');

  function handlePurpleClick() {
    setColorClass('bg-purple');
  }

  return (
    <div id="color-changer">
      <h1 className={ colorClass }>Hello</h1>
      <div id="buttons">
        <button>Green</button>
        <button>Red</button>
        <button onClick={handlePurpleClick}>Purple</button>
      </div>
    </div>
  );
}

export default ColorChanger;