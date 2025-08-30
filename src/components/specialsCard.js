import moto from '../assets/moto.png';

const SpecialsCard = ({ image, title, price, description }) => {
  return (
    <div className="specials-item">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="title-food">
        <h2>{title}</h2>
        <span className="price">${price}</span>
      </div>
      <div className="description">
        <p>{description}</p>
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
  );
};

export default SpecialsCard;
