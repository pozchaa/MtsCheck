import Dot from "./dot.js";

import "../scss/dots.scss";

export default function Dots({setPage, page }) {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < 3; i++) {
      dots.push(<Dot setPage={setPage} page={page} key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return <li className="dots">{renderDots()}</li>;
}
