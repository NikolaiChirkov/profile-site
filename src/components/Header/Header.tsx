import Logo from '../../resources/svg/portfolio.svg';
import './Header.scss';

const Header = () => {
    
  return (
    <div className="header">
      <img className="header__image" src={Logo} alt="portfolio logo"/>
      <h1 className="header__title">Nikolai's portfolio</h1>
    </div>
  );
    
}

export default Header;