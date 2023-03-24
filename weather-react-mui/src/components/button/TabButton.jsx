import { useEffect, useState } from 'react';
import './TabButton.css';

const btn = {
  default: 'tab__button',
  active: 'tab__button tab__button--active',
};

function TabButton({
  text, setTab, activeButton, setActiveButton,
}) {
  const [buttonClass, setButtonClass] = useState(getClass(text));

  useEffect(() => {
    if (activeButton !== text) {
      setButtonClass(btn.default);
    }
  }, [activeButton]);

  function handleClick() {
    if (buttonClass === btn.default && activeButton !== text) {
      setActiveButton(text);
      setButtonClass(btn.active);
    }

    switch (text) {
      case 'Now':
        setTab('Now');
        break;
      case 'Details':
        setTab('Details');
        break;
      case 'Forecast':
        setTab('Forecast');
        break;
      default:
        break;
    }
  }
  return (
    <button className={buttonClass} type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

function getClass(text) {
  if (text === 'Now') {
    return btn.active;
  }
  return btn.default;
}

export { TabButton };
