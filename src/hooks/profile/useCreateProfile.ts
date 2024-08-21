import { useMutation } from '@tanstack/react-query';
import { AxiosResponse, HttpStatusCode } from 'axios';
import { useAxiosBase } from '../api/useAxiosBase';
import { type CreateUserSchema } from '@/validators/CreateUserSchema';
import User from '@/typings/user';
import { BasicResponse } from '@/response/basic_response';

export function useCreateProfile() {
  const axiosInstance = useAxiosBase();

  return useMutation({
    mutationKey: ['create-profile'],
    mutationFn: async (data: CreateUserSchema): Promise<User> => {
      let formData = new FormData();

      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      if (data.middleName) formData.append('middleName', data.middleName);
      formData.append('email', data.email);
      formData.append('phoneNumber', data.phoneNumber);
      for (const photo of data.photo) {
        formData.append('photos', photo);
      }

      const response: AxiosResponse<BasicResponse<User>> =
        await axiosInstance.post('/users/create', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

      if (response.status !== HttpStatusCode.Ok) {
        console.error(response.data);
        throw new Error(response?.data?.message || 'Something went wrong')
      }

      return response.data.data;
    },

  });
}
