import { DisheContainer } from './style';

interface DisheProps {
  img: string;
  title: string;
  description: string;
  price: string;
}

export function Dishe({ img, title, description, price }: DisheProps) {
  return (
    <DisheContainer className="dishe">
      <img src={`/${img}.png`} className="dishe__img" alt={title} />
      <h4 className="dishe__title">{title}</h4>
      <p className="dishe__description">{description}</p>
      <span className="dishe__price">R$ {price}</span>
    </DisheContainer>
  );
}
