import { useState } from "react";
import "../styles/accordion.css";

const Accordian = ({ title, content }) => {
  const [isActive, setisActive] = useState(false);

  return (
    <section className="accordion-card">
      <div className="header" onClick={() => setisActive(!isActive)}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>

      <div className="content">
        {isActive && <p className="card-info">{content}</p>}
      </div>
    </section>
  );
};

export default Accordian;
