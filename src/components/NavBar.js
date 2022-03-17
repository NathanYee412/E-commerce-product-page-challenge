import './NavBar.css'

export default function NavBar() {


    return(
        <div className='navbar'>
            <div className='navElements'>
                <h1 className='logo'>sneakers</h1>
            </div>
            <div className='navElements'>
                <ul className='navOptions'>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='navElements cart'>
                <p>Cart</p>
            </div>
            <div className='navElements avatar'>
                <p>Avatar</p>
            </div>
            <hr className='line' />    
        </div>
    );
}