import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/testimonials.module.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { quote: "This is the best product I've ever used!", author: "Jane Doe" },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className={styles.testimonialsPage}>
      <Link to="/" className={styles.backBtn}>
        ← Home
      </Link>

      <div className={styles.testimonials}>
        <div className={styles.testimonialsQuote}>
          {testimonials[currentIndex].quote}
        </div>

        <div className={styles.testimonialsAuthor}>
          - {testimonials[currentIndex].author}
        </div>

        <div className={styles.testimonialsNav}>
          <button onClick={handlePrevClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
