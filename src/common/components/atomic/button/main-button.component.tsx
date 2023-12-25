import { IButtonProps } from './interfaces/button.interfaces';

const Button = ({ children }: IButtonProps) => {
  return <button>{children}</button>;
};

export default Button
