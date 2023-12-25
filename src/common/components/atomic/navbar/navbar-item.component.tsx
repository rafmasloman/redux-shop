import {
  IconBrandProducthunt,
  IconShoppingCart,
  IconUser,
} from '@tabler/icons-react';
import Avatar from '../avatar/avatar.component';

const NavbarItem = () => {
  return (
    <div className="flex  flex-row justify-between">
      <div className="flex    w-fit items-end">
        <h2 className="font-poppins font-bold text-[1.5rem] ">
          ReShop <span className="text-orange-400 text-5xl">.</span>
        </h2>
      </div>

      <div className="flex flex-row items-center space-x-5">
        <IconShoppingCart size={21} />
        <IconUser size={21} />
        {/* <Avatar src="" size={50} /> */}
      </div>
    </div>
  );
};

export default NavbarItem;
