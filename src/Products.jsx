import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      Products
      <li>
        <Link to="/products/pr1">Product 1</Link>
        <Link to="/products/pr2">Product 2</Link>
        <Link to="/products/pr3">Product 3</Link>
        <Link to="/products/pr4">Product 4</Link>
      </li>
    </div>
  )
}

export default Products;