import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for SPA navigation
import styles from "../styles/accordion.module.css";

// 1. The Individual Component
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className={styles.accordionCard}>
      <div className={styles.header} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className={styles.icon}>{isActive ? "-" : "+"}</p>
      </div>

      <div className={styles.content}>
        {isActive && <p className={styles.cardInfo}>{content}</p>}
      </div>
    </section>
  );
};

// 2. The Main Page (Named Export)
export const AccordionPage = ({ data }) => {
  return (
    <div className={styles.accordionPage}>
      <Link to="/" className={styles.backBtn}>
        ← Home
      </Link>
      <div className={styles.container}>
        {data.map((item, index) => (
          /* Using item.id or index as a fallback key */
          <Accordion key={item.id || index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
