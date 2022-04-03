import { useState, useEffect } from 'react'
import './ProductDetails.css'
import product1 from '../img/image-product-1.jpg'
import product2 from '../img/image-product-2.jpg'
import product3 from '../img/image-product-3.jpg'
import product4 from '../img/image-product-4.jpg'



// git test
function ProductDetails(props) {


    const [ count, setCount ] = useState(0);

    const imgs = [
        product1,
        product2,
        product3,
        product4
    ];

    function handleClick(input) {
        if(!input){
            let temp = count;
            if(temp === 3) {
                setCount(0);
            }
            else {
                setCount(temp += 1);
            }
        }

        else {
            setCount(input);
        }
            
    }


    return(
        <div className="container">
            <div className="col">
                <img src={imgs[count]} className='product1' />
                <button onClick={handleClick}>Next</button>
                <div className='container'>
                    <div className='col'>
                        <img src={product2} alt='product2' className='miniProduct' onClick={handleClick} />
                    </div>
                    <div className='col'>
                        <img src={product3} alt='product3' className='miniProduct' />
                    </div>
                    <div className='col'>
                        <img src={product4} alt='product4' className='miniProduct' />
                    </div>
                </div>
            </div>
            <div className="col">
                <div className='productdetails'>
                    <h1>Sneaker Company</h1>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;