import HeroImage from "../assets/hero-image.png";
const Main = () => {
  return (
    <>
      <main>
        <section className="hero-section">
          <div className="hero">
            <div className="hero-text">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>

              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <button>Reserve a Table</button>
            </div>
            <div className="invisible"></div>
            <img className="hero-image" src={HeroImage} alt="Delicious food" />
          </div>
        </section>

        
      </main>
    </>
  );
};

export default Main;
