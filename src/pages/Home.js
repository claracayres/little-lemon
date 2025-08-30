import HeroImage from "../assets/hero-image.png";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.jpg";
import SpecialsCard from "../components/specialsCard";
import TestimonialsCard from "../components/testimonialsCard";

const Home = () => {
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
              <button className="reserve-button">Reserve a Table</button>
            </div>
            <div className="invisible"></div>
            <img className="hero-image" src={HeroImage} alt="Delicious food" />
          </div>
        </section>

        <section className="specials-section">
          <div className="specials">
            <div className="specials-header">
              <h1>This Week's Specials</h1>
              <button className="order-button">Online Order</button>
            </div>

            <div className="specials-list">
              <SpecialsCard
                image={card1}
                title="Greek Salad"
                price={12.99}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <SpecialsCard
                image={card2}
                title="Bruschetta"
                price={5.99}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <SpecialsCard
                image={card3}
                title="Lemon Dessert"
                price={4.99}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="testimonials-list">
            <h1>Testimonials</h1>
            <div className="testimonials-grid">
              <TestimonialsCard
                stars={5}
                quote="The food was amazing!"
                author="Happy Customer"
              />
              <TestimonialsCard
                stars={4}
                quote="I loved the ambiance!"
                author="Satisfied Patron"
              />
              <TestimonialsCard
                stars={3}
                quote="The service was okay."
                author="Neutral Observer"
              />
              <TestimonialsCard
                stars={5}
                quote="The food was amazing!"
                author="Happy Customer"
              />
              <TestimonialsCard
                stars={5}
                quote="The food was amazing!"
                author="Happy Customer"
              />
              <TestimonialsCard
                stars={3}
                quote="The food was amazing!"
                author="Happy Customer"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
