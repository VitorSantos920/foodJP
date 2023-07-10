import { Container } from './Container';
import { Header } from './components/Header';
import { Hero } from './styles/Hero';
import { MadeIn } from './styles/MadeIn';

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
      </main>
    </Container>
  );
}

export default App;
