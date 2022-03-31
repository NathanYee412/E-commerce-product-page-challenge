import './ProductDetails.css'
import product1 from '../img/image-product-1.jpg'

// git test
function ProductDetails(props) {

    return(
        <div className="container">
            <div className="col">
                <img src={product1} className='product1' />
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