import Image from 'next/image';
import { IProductCardResponse } from './interfaces/product.interfaces';

const ProductCard = ({
  price,
  title,
  category,
  description,
  image,
}: IProductCardResponse) => {
  return (
    <div className="text-black w-[225px] font-poppins ">
      <div className="flex items-center h-[250px] justify-center">
        <Image width={150} height={150} alt={title} src={image} />
      </div>

      <div className="h-[130px] flex flex-col justify-between">
        <div>
          <p className="text-sm">{title}</p>
          <p className="text-lg text-green-500 font-medium mt-2.5">${price}</p>
        </div>

        {/* <p>{category}</p> */}
        <div>
          <button className="border border-gray-300 bg-slate-50 w-full py-1.5 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
