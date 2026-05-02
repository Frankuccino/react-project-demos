// import Counter from "./components/Counter";
// import Todo from "./components/Todo";
// import Meals from "./components/Meals";
// import Calculator from "./components/Calculator";
// import ToggleBackgroundColor from "./components/ToggleBackgroundColor";
// import HiddenSearchBar from "./components/HiddenSearchBar";
// import Testimonials from "./components/Testimonials";

import { useId } from "react";
import Accordion from "./components/Accordion";
import { accordionData } from "./ultils/content";

const App = () => {
  const id = useId();

  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <ToggleBackgroundColor /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonials /> */}
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} key={id + title} />
        ))}
      </div>
    </div>
  );
};

export default App;
