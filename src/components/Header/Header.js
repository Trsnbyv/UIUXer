import SiteLogo from '../../assets/images/site-logo.svg'
import HeaderItem from '../HeaderItem/HeaderItem';
const Header = () =>{
    return(
        <header className='site__header'>
        <div className='container'>
          <div className='header'>
            <a className='header__logo' href='/'>
              <img src={SiteLogo} width={176} height={41} alt='logo'/> 
            </a>
            <ul className='header__list'>
              <HeaderItem title={'Home'}/>
              <HeaderItem title={'About Me'}/>
              <HeaderItem title={'Pages'}/>
              <HeaderItem title={'Contact Us'}/>
            </ul>
          </div>
        </div>
      </header>
    )
}

export default Header