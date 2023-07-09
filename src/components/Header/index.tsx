import { HeaderContainer } from './style';

export function Header() {
  return (
    <HeaderContainer className="header flex">
      <a href="#" className="header__logo">
        Food<span>JP</span>
      </a>

      <nav className="header__menu">
        <ul className="header__menu-items flex">
          <li className="header__item item-1">
            <a href="#">Início</a>
          </li>
          <li className="header__item item-2">
            <a href="#">Cardápio</a>
          </li>
          <li className="header__item item-3">
            <a href="#">Sobre</a>
          </li>
        </ul>
      </nav>

      <a href="#">
        <button className="header__btn">Entrar</button>
      </a>
    </HeaderContainer>
  );
}
