import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  let card = {
    img: "katie-zaferes.png",
    rating: "5.0",
    reviewCount: 6,
    country: "USA",
    title: "life Lessons with Katie Zaferes",
    price: 136,
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card cardinfo={card} />
    </div>
  );
}

export default App;
