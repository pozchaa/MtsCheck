import { useState } from 'react';

import './scss/reset.css';
import './scss/App.scss';

import Slider from './components/leftBlock.js';
import RightBlock from './components/rightBlock.js';
import Bottom from './components/bottom';

function App() {
  const [isActive, setIsActive] = useState(false);

  const activeFilter = (value) => {
    setIsActive(value);
  };

  return (
    <div className="mainContainer">
      <div className="content">
        <Slider />
        <RightBlock activeFilter={activeFilter} />
      </div>
      <Bottom isActive={isActive} />
    </div>
  );
}

export default App;
