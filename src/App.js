import './App.css';
import NavBar from './components/NavBar';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <NavBar />
      <hr></hr>
      {/* <ProductDetails price="125.00" discount="50" discountedprice="250.00"/> */}
      <Test price="125.00" discount="50" discountedprice="250.00"/>
    </div>
  );
}

export default App;
