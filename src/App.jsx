import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { useId } from "react";
import "./index.css";

// Components
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Meals from "./components/Meals";
import Calculator from "./components/Calculator";
import ToggleBackgroundColor from "./components/ToggleBackgroundColor";
import HiddenSearchBar from "./components/HiddenSearchBar";
// import Testimonials from "./components/Testimonials";
// import Accordion from "./components/Accordion";
// import Form from "./components/Form";
// import BackButton from "./components/BackButton"; // Highly recommended!

// Data
// import { accordionData } from "./ultils/content";

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
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}

        {/* <Route
          path="/accordion"
          element={
            <div className="accordion-page-wrapper">
              {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} key={id + title} />
              ))}
            </div>
          }
        /> */}

        {/* <Route path="/form" element={<Form />} /> */}
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
    // { title: "Testimonials", path: "/testimonials" },
    // { title: "Accordion", path: "/accordion" },
    // { title: "Validation Form", path: "/form" },
  ];

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>My React Project Showcase</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {projects.map((p) => (
          <Link key={p.path} to={p.path} style={cardStyle}>
            {p.title}
          </Link>
        ))}
      </div>
    </main>
  );
}

const cardStyle = {
  padding: "1.5rem",
  border: "1px solid #ddd",
  borderRadius: "12px",
  textDecoration: "none",
  color: "#333",
  background: "#f9f9f9",
  fontWeight: "bold",
  transition: "transform 0.2s",
};

export default App;
