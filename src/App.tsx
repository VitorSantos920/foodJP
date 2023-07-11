import { Container } from './Container';
import { Avaliation } from './components/Avaliation';
import { Dishe } from './components/Dishe';
import { Header } from './components/Header';
import { Comments } from './styles/Comments';
import { Footer } from './styles/Footer';
import { Hero } from './styles/Hero';
import { Location } from './styles/Location';
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
          <div className="most-popular__dishes flex">
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

        <Location className="location">
          <h2 className="location__title">Localização</h2>
          <img src="/map.png" className="location__img" alt="Location map" />

          <div className="location__input-container flex">
            <label htmlFor="location">
              <img src="/location.svg" alt="Ícone de localização do input" />
              <input
                type="text"
                id="location"
                placeholder="Localização para entrega"
                required
              />
            </label>

            <button type="submit" className="location__btn">
              <img src="/loupe.svg" alt="" />
              <span>Buscar</span>
            </button>
          </div>
        </Location>
      </main>
      <Footer className="footer flex">
        <a href="" className="footer__logo">
          Food<span>JP</span>
        </a>

        <section className="footer__col">
          <h5 className="footer__col-title">Contato</h5>
          <ul className="footer__items">
            <li>
              <a href="#">+55 21 9999-9999</a>
            </li>
            <li>
              <a href="#">email@gmail.com</a>
            </li>
          </ul>
        </section>

        <section className="footer__col">
          <h5 className="footer__col-title">Sobre nós</h5>

          <ul className="footer__items">
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Valores</a>
            </li>
            <li>
              <a href="/">Página principal</a>
            </li>
          </ul>
        </section>

        <section className="footer__col">
          <h5 className="footer__col-title">Serviços</h5>

          <ul className="footer__items">
            <li>
              <a href="#">Entrega</a>
            </li>
            <li>
              <a href="#">Retirada</a>
            </li>
          </ul>
        </section>
      </Footer>
    </Container>
  );
}

export default App;
