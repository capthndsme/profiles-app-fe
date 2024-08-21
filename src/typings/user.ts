import UserPhoto from "./user_photo"

export default class User {

  declare id: string

  declare createdAt: string

  declare updatedAt: string

  declare firstName: string

  declare lastName: string

  declare middleName: string | null

  declare email: string

  declare phoneNumber: string

  declare userPhoto: UserPhoto[]

}