import { Container } from './Container';
import { Avaliation } from './components/Avaliation';
import { Dishe } from './components/Dishe';
import { Header } from './components/Header';
import { Comments } from './styles/Comments';
import { Hero } from './styles/Hero';
import { MadeIn } from './styles/MadeIn';
import { MostPopular } from './styles/MostPopular';

function App() {
  return (
    <Container>
      <Header />
      <main>
        <Hero className="hero flex">
          <div className="hero__content">
            <h1 className="hero__title">Comida Oriental</h1>
            <p className="hero__description">
              A culinária Japonesa é bastante equilibrada, sendo muito rica em
              peixes (ômega 3), vegetais, massas e ingredientes frescos.
            </p>
            <a href="#">
              <button className="hero__btn">Cardápio</button>
            </a>
          </div>

          <div className="hero__img-container">
            <img
              src="/heroImage.png"
              alt="Sushi japonês"
              className="hero__img"
            />
          </div>
        </Hero>

        <MadeIn className="made-in flex">
          <img src="/holdingDishe.png" className="made-in__img" alt="" />
          <div className="made-in__content">
            <h2 className="made-in__title">Feita de forma Tradicional</h2>
            <p className="made-in__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="made-in__readmore">
              Ler mais sobre o modo de preparo
            </a>
          </div>
        </MadeIn>

        <MostPopular className="most-popular">
          <h2 className="most-popular__title">Mais populares</h2>
          <div className="dishes flex">
            <Dishe
              title="Ramen de Frango"
              img="menuDishe1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price="30"
            />
            <Dishe
              title="Ramen Apimentado"
              img="menuDishe2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price="30"
            />
            <Dishe
              title="Ramen Tradicional"
              img="menuDishe3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price="30"
            />
          </div>
        </MostPopular>

        <Comments className="comments">
          <h2 className="comments__title">Comentários</h2>

          <div className="avaliations flex">
            <Avaliation
              username="Daniele Almeida"
              img="imgProfile1"
              description="Ótimo serviço! Encantada com a qualidade dos pratos."
              startsQuantity={5}
            />
            <Avaliation
              img="imgProfile2"
              username="Ricardo França"
              description="Não é apenas a comida excelente, o serviço torna a experiência especial."
              startsQuantity={5}
            />
          </div>
        </Comments>
      </main>
    </Container>
  );
}

export default App;
