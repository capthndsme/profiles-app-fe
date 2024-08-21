import { useQuery } from '@tanstack/react-query'
import { AxiosResponse, HttpStatusCode } from 'axios'
import { useAxiosBase } from '../api/useAxiosBase'
import User from '@/typings/user'
import { BasicResponse } from '@/response/basic_response'


export function useGetProfiles() {
  const axiosInstance = useAxiosBase()

  return useQuery({
    queryKey: ['get-user-profiles'],
    queryFn: async (): Promise<User[]> => {
     

      const response: AxiosResponse<BasicResponse<User[]>> =
        await axiosInstance.get(`/users`)

      if (response.status !== HttpStatusCode.Ok) {
        console.error(response.data)
        throw new Error(response?.data?.message || 'Something went wrong')
      }

      return response.data.data
    },
  })
}
