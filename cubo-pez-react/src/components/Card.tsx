import "../styles/Card.css";

interface CardProps {
  image: string;
  title: string;
  price: string;
  alt?: string;
}

const Card = ({ image, title, price, alt = "" }: CardProps) => {
  return (
    <div className="card">
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Card;