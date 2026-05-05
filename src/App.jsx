import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { useId } from "react";
import "./index.css";
import styles from "../src/styles/home.module.css";

// Components
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Meals from "./components/Meals";
import Calculator from "./components/Calculator";
import ToggleBackgroundColor from "./components/ToggleBackgroundColor";
import HiddenSearchBar from "./components/HiddenSearchBar";
import Testimonials from "./components/Testimonials";
import { AccordionPage } from "./components/Accordion";
import Form from "./components/Form";

// Data
import { accordionData } from "./ultils/content";

const App = () => {
  // const id = useId();

  return (
    <Router>
      <Routes>
        {/* Main Menu */}
        <Route path="/" element={<Home />} />
        {/* Project Routes - Notice how clean these are now! */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/toggle-color" element={<ToggleBackgroundColor />} />
        <Route path="/search-bar" element={<HiddenSearchBar />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route
          path="/accordion"
          element={<AccordionPage data={accordionData} />}
        />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

// Your Navigation Hub
function Home() {
  const projects = [
    { title: "Counter App", path: "/counter" },
    { title: "Todo List", path: "/todo" },
    { title: "Meals API", path: "/meals" },
    { title: "Calculator", path: "/calculator" },
    { title: "Toggle Color", path: "/toggle-color" },
    { title: "Hidden Search", path: "/search-bar" },
    { title: "Testimonials", path: "/testimonials" },
    { title: "Accordion", path: "/accordion" },
    { title: "Validation Form", path: "/form" },
    {
      title: "Products Filter",
      path: "https://react-products-filtering.vercel.app/",
      isExternal: true,
    },
  ];

  return (
    <main className={styles.homeWrapper}>
      <h1 className={styles.title}>Beginner Project Showcase</h1>

      <div className={styles.grid}>
        {projects.map((p) => {
          // Determine classes: always 'card', add 'finalProject' if it's external
          const cardClasses = p.isExternal
            ? `${styles.card} ${styles.finalProject}`
            : styles.card;

          if (p.isExternal) {
            return (
              <a
                key={p.path}
                href={p.path}
                className={cardClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.badge}>Final Project</div>
                {p.title}
                <span className={styles.externalIcon}>↗</span>
              </a>
            );
          }

          return (
            <Link key={p.path} to={p.path} className={cardClasses}>
              {p.title}
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export default App;
