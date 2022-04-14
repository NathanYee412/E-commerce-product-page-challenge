import './NavBar.css'
import cartIcon from '../img/icon-cart.svg';
import avatar from '../img/image-avatar.png';

export default function NavBar() {


    return(
        <div className='navbar'>
            <div>
                <h1 className='logo'>sneakers</h1>
            </div>
            <div className='items first'>
                <a href='/'>Collections</a>
            </div>
            <div className='items'>
                <a href='/'>Men</a>
            </div>
            <div className='items'>
                <a href='/'>Women</a>
            </div>
            <div className='items'>
                <a href='/'>About</a>
            </div>
            <div className='items'>
                <a href='/'>Contact</a>
            </div>
            <div className='user'>
                <div>
                    <img src={cartIcon} alt="cart icon" className='cart' />
                </div>
                <div>
                    <img src={avatar} alt="avatar" className='avatar' />
                </div>
            </div>
        </div>
    );
}