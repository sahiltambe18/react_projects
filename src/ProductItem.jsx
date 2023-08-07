import {useParams} from 'react-router-dom';
const ProductItem = () => {

    const obj = useParams();
    console.log(obj);
    return (
    <div>
      product item number :{obj.prid}
    </div>
  )
}

export default ProductItem
