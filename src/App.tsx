import { Container } from './Container';
import { Header } from './components/Header';
import { Hero } from './styles/Hero';

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
            <button className="hero__btn">Cardápio</button>
          </div>

          <div className="hero__img-container">
            <img
              src="/heroImage.png"
              alt="Sushi japonês"
              className="hero__img"
            />
          </div>
        </Hero>
      </main>
    </Container>
  );
}

export default App;
