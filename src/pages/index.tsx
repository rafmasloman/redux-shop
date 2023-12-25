import Image from 'next/image';
import { Inter, Poppins, Quicksand } from 'next/font/google';
import NavbarItem from '@/common/components/atomic/navbar/navbar-item.component';

const inter = Inter({ subsets: ['latin'] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center bg-white`}>
      <div className="container text-black px-10">
        <NavbarItem />
      </div>
    </main>
  );
}
