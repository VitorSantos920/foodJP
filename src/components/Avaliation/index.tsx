import { Star } from '../Star';
import { AvaliationContainer } from './style';

interface AvaliationProps {
  img: string;
  username: string;
  description: string;
  startsQuantity: number;
}

export function Avaliation({
  img,
  username,
  description,
  startsQuantity,
}: AvaliationProps) {
  let stars: JSX.Element[] = [];

  for (let index = 0; index < startsQuantity; index++) {
    stars.push(<Star />);
  }

  return (
    <AvaliationContainer className="avaliation">
      <img
        src={`/${img}.png`}
        alt={username}
        className="avaliation__user-img"
      />
      <h4 className="avaliation__username">{username}</h4>
      <p className="avaliation__description">{description}</p>
      <div className="avaliation__stars">{stars.map((star) => star)}</div>
    </AvaliationContainer>
  );
}
