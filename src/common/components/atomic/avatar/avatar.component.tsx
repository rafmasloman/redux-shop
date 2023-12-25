import Image from 'next/image';
import { IAvatarProps } from './interfaces/avatar.interfaces';

const Avatar = ({ size, src, rounded }: IAvatarProps) => {
  return (
    <div className={`w-fit h-fit`}>
      <Image
        src={src!}
        width={size}
        height={size}
        alt="Image Avatar"
        className={`rounded-${rounded}`}
      />
    </div>
  );
};

export default Avatar;
