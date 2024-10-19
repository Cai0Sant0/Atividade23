import "./App.css";
import ParagrafoCond from "./components/ParagrafoCond";

function App() {
  return (
    <>
      <ParagrafoCond isVisible = {true} />
      <ParagrafoCond isVisible = {false} />
      <ParagrafoCond isVisible = {false} />
      <ParagrafoCond isVisible = {true} />
      <ParagrafoCond isVisible = {false} />
    </>
  );
}

export default App;
