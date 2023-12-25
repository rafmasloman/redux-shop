export interface ICartPostRequestMutation {
  userId: number;
  date: Date;
  products: { productId: number; quantity: number }[];
}
