import { useState, useEffect } from 'react';
import './Test.css';
import product1 from '../img/image-product-1.jpg';
import product2 from '../img/image-product-2.jpg';
import product3 from '../img/image-product-3.jpg';
import product4 from '../img/image-product-4.jpg';

function Test(props) {

    const imgs = [
        product1,
        product2,
        product3,
        product4
    ];


    const [ count, setCount ] = useState(0);
    const [ curImg, setImg ] = useState(0);

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

    return(
        <div className='product'>
            <div className='info'>
                <div className="productimages">
                    <img src={imgs[curImg]} alt='product' className='mainimg'/>
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
                    <h1>Fall Limited Sneakers</h1>
                    <p>
                        Theses low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                    </p>
                    <div className='pricediscount'>
                        <h2>${props.price}</h2>
                        <div className='discountpercent'>
                            <h3>{props.discount}%</h3>
                        </div>
                    </div>
                    <h3>{props.discountedprice}</h3>
                    <div className='quantity'>
                        <div className='adjuster'>
                            <button onClick={decreaseCount}>-</button>
                            <p>{count}</p>
                            <button onClick={increaseCount}>+</button>
                        </div>
                        <div>
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;




// // git test
// function ProductDetails(props) {


//     const [ count, setCount ] = useState(0);

//     const imgs = [
//         product1,
//         product2,
//         product3,
//         product4
//     ];

//     function handleClick(input) {
//         if(!input){
//             let temp = count;
//             if(temp === 3) {
//                 setCount(0);
//             }
//             else {
//                 setCount(temp += 1);
//             }
//         }

//         else {
//             setCount(input);
//         }
            
//     }


//     return(
//         <div className="container">
//             <div className="col">
//                 <div className='productimage'>
//                     <img src={imgs[count]} className='product1' />
//                     <button onClick={handleClick}>Next</button>
//                     <div className='container'>
//                         <div className='col'>
//                             <img src={product2} alt='product2' className='miniProduct' onClick={handleClick} />
//                         </div>
//                         <div className='col'>
//                             <img src={product3} alt='product3' className='miniProduct' />
//                         </div>
//                         <div className='col'>
//                             <img src={product4} alt='product4' className='miniProduct' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="col">
//                 <div className='productdetails'>
//                     <h2>SNEAKER COMPANY</h2>
//                     <h1>Fall Limited Sneakers</h1>
//                     <p>
//                         Theses low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
//                     </p>
//                     <h2>{props.price}</h2>
//                     <div>
//                         <h3>{props.discount}</h3>
//                     </div>
//                     <h3>{props.discountedprice}</h3>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductDetails;