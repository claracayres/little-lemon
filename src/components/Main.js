import HeroImage from "../assets/hero-image.png";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.jpg";
import moto from "../assets/moto.png";

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
              <div className="specials-item">
                <div className="image-container">
                  <img src={card1} alt="Greek Salad" />
                </div>
                <div className="title-food">
                  <h2>Greek Salad</h2>
                  <span className="price">$12.99</span>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div>
                  <button className="delivery-button">
                    Order a delivery
                    <span className="moto">
                      <img src={moto} alt="Delivery Moto" />
                    </span>
                  </button>
                </div>
              </div>

              <div className="specials-item">
                <div className="image-container">
                  <img src={card2} alt="Bruschetta" />
                </div>
                <div className="title-food">
                  <h2>Bruschetta</h2>
                  <span className="price">$5.99</span>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div>
                  <button className="delivery-button">
                    Order a delivery
                    <span className="moto">
                      <img src={moto} alt="Delivery Moto" />
                    </span>
                  </button>
                </div>
              </div>

              <div className="specials-item">
                <div className="image-container">
                  <img src={card3} alt="Lemon Dessert" />
                </div>
                <div className="title-food">
                  <h2>Lemon Dessert</h2>
                  <span className="price">$5.00</span>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div>
                  <button className="delivery-button">
                    Order a delivery
                    <span className="moto">
                      <img src={moto} alt="Delivery Moto" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
