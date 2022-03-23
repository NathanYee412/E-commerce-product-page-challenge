import './NavBar.css'
import cartIcon from '../img/icon-cart.svg';
import avatar from '../img/image-avatar.png';

export default function NavBar() {


    return(
        <div className='navbar'>
            <div className='navElements'>
                <h1 className='logo'>sneakers</h1>
            </div>
            <div className='navElements'>
                <div className='options'>
                    <ul className='navOptions'>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='navElements cart'>
                <img src={cartIcon} alt="cart icon" />
            </div>
            <div className='navElements avatar'>
                <img src={avatar} alt="avatar" />
            </div>
            <hr></hr>
        </div>
    );
}