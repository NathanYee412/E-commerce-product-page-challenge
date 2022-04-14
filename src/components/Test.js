import { useState } from 'react';
import './Test.css';
import product1 from '../img/image-product-1.jpg';
import product2 from '../img/image-product-2.jpg';
import product3 from '../img/image-product-3.jpg';
import product4 from '../img/image-product-4.jpg';
import cartIcon from '../img/icon-cart.svg';
import next from '../img/icon-next.svg';
import prev from '../img/icon-previous.svg';

function Test(props) {

    const imgs = [
        product1,
        product2,
        product3,
        product4
    ];


    const [ count, setCount ] = useState(0);
    const [ curImg, setImg ] = useState(0);
    const [ lightboxDisplay, setLightboxDisplay ] = useState(false);
    const [ imageToShow, setImageToShow ] = useState('');

    function increaseCount() {
        let temp = count;
        temp = temp + 1;
        setCount(temp);
    }

    function decreaseCount() {
        let temp = count;
        if(temp <= 0) {
            setCount(0);
        } 

        temp = temp - 1;
        setCount(temp);
    }

    function mainImgClick() {
        setLightboxDisplay(!lightboxDisplay);
        setImageToShow(imgs[0]);
    }

    function prevImage() {
        let temp = count;

        if(temp === 0) {
            temp = imgs.length;
        }
        
        temp = temp - 1;

        setCount(temp);
        setImageToShow(imgs[temp]);
    }

    function nextImage() {
        let temp = count;


        if(temp === imgs.length - 1) {
            temp = -1;
        }
        
        temp = temp + 1;

        setCount(temp);
        setImageToShow(imgs[temp]);
    }

    return(
        <div className='product'>
            <div>
                { lightboxDisplay ?
                    <div>
                        <div className='lightbox'>
                            <button onClick={() => mainImgClick()} className='exit'>x</button>
                            <div className='lightbox'>
                                <div className='lightboxcontrols'>
                                    <img onClick={() => prevImage()} src={prev} alt='prev' />
                                </div>
                                    <img src={imageToShow} alt='product' className='lightboximg'/>
                                <div className='lightboxcontrols'>
                                    <img onClick={() => nextImage()} src={next} alt='next' />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                : null }
            </div>
            <div className='info'>
                <div className="productimages">
                    <img src={imgs[curImg]} alt='product' className='mainimg' onClick={() => mainImgClick()}/>
                </div>
                <div className='subimages'>
                    <img src={product1} alt='product1' onClick={() => setImg(0)} className='subimg'/>
                    <img src={product2} alt='product2' onClick={() => setImg(1)} className='subimg'/>
                    <img src={product3} alt='product3' onClick={() => setImg(2)} className='subimg'/>
                    <img src={product4} alt='product4' onClick={() => setImg(3)} className='subimg'/>
                </div>
            </div>
            <div className='info'>
                <div className='productdetails'>
                    <h3>SNEAKER COMPANY</h3>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p>
                        Theses low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                    </p>
                    <div className='pricediscount'>
                        <h2>${props.price}</h2>
                        <div className='discountpercent'>
                            <h3>{props.discount}%</h3>
                        </div>
                    </div>
                    <h3 className='discountedprice'>{props.discountedprice}</h3>
                    <div className='quantity'>
                        <div className='adjuster'>
                            <button onClick={decreaseCount} className='countbutton'>-</button>
                            <p>{count}</p>
                            <button onClick={increaseCount} className='countbutton'>+</button>
                        </div>
                        <div className='addtocart'>
                            <img src={cartIcon} alt='cart icon' className='carticon'/>
                            <button className='cart'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;
