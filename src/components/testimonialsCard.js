import yellowStar from "../assets/yellow-star.png";
import greyStar from "../assets/grey-star.png";
import testimonialsPic from "../assets/testimonials-pic.png";

const TestimonialsCard = ({ stars, quote, author }) => {
  return (
    <div className="testimonial">
      <img
        className="testimonial-pic"
        src={testimonialsPic}
        alt="Testimonial"
      />
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              className="star"
              src={index < stars ? yellowStar : greyStar}
              alt={index < stars ? "Filled star" : "Empty star"}
            />
          ))}
        </div>
      <p>"{quote}"</p>
      <span>- {author}</span>
    </div>
  );
};

export default TestimonialsCard;
