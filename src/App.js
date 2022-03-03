import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  let cards = data.map((card) => {
    console.log(card.title);
    return (
      <Card
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
