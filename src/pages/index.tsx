import Image from 'next/image';
import { Inter, Poppins, Quicksand } from 'next/font/google';
import NavbarItem from '@/common/components/atomic/navbar/navbar-item.component';
import ProductCard from '@/common/components/molecul/card/product-card.component';
import { useEffect, useState } from 'react';
import { apiGetAllProductsQuery } from '@/common/api/products/products.services';
import { IProductsQueryResponse } from '@/common/api/products/products.interfaces';

const inter = Inter({ subsets: ['latin'] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export default function Home() {
  const [products, setProducts] = useState<IProductsQueryResponse[]>([]);

  useEffect(() => {
    const data = apiGetAllProductsQuery(4);

    data.then((product) => setProducts(product));
  }, []);

  console.log('data : ', products);

  return (
    <main className={`flex min-h-screen flex-col items-center bg-white`}>
      <div className="container text-black px-10">
        <NavbarItem />
      </div>

      <div className="container px-10">
        <div className="mt-16">
          <p className="text-black font-poppins text-2xl font-semibold">
            Products
          </p>
        </div>

        <div className="w-24 rounded-lg h-1 mt-2 bg-gray-200"></div>

        <div className="grid grid-cols-4 justify-center justify-items-center mt-5">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
