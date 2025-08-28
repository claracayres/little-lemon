import HeroImage from "../assets/hero-image.png";
const Home = () => {
  return (
    <>
      <main>
        <section className="hero">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
          <img src={HeroImage} alt="Delicious food" />
        </section>
      </main>
    </>
  );
};

export default Home;
