import Image from 'next/image';
import { IProductCardResponse } from './interfaces/product.interfaces';

const ProductCard = ({
  id,
  price,
  title,
  category,
  description,
  image,
}: IProductCardResponse) => {
  return (
    <div>
      {/* <div> */}
      <Image width={200} height={300} alt={title} src={image} />
      {/* </div> */}

      <div>
        <p>{title}</p>
        <div>
          <p>{price}</p>
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
