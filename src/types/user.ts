export interface UserAPIResponse {
  success: boolean
  message: string
  total_users: number
  offset: number
  limit: number
  users: User[]
}

export interface User {
  id: number
  gender: string
  date_of_birth: string
  job: string
  city: string
  zipcode: string
  latitude: number
  profile_picture: string
  first_name: string
  email: string
  last_name: string
  phone: string
  street: string
  state: string
  country: string
  longitude: number
}
