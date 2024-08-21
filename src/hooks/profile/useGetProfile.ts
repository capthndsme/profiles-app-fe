import { useQuery } from '@tanstack/react-query'
import { AxiosResponse, HttpStatusCode } from 'axios'
import { useAxiosBase } from '../api/useAxiosBase'
import User from '@/typings/user'
import { BasicResponse } from '@/response/basic_response'


export function useGetProfile(id?: string) {
  const axiosInstance = useAxiosBase()

  return useQuery({
    queryKey: ['get-user-profile', id],
    queryFn: async (): Promise<User> => {
     

      const response: AxiosResponse<BasicResponse<User>> =
        await axiosInstance.get(`/users/${id}`)

      if (response.status !== HttpStatusCode.Ok) {
        console.error(response.data)
        throw new Error(response?.data?.message || 'Something went wrong')
      }

      return response.data.data
    },
  })
}
