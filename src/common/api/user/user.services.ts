import { IUsersQueryResponse } from './user.interface';

export const apiGetAllUserQuery = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/users`, {
      method: 'GET',
    });

    const data: IUsersQueryResponse[] = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const apiGetUserByIdQuery = async (userId: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/users/${userId.toString()}`,
      {
        method: 'GET',
      },
    );

    const data: IUsersQueryResponse = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
