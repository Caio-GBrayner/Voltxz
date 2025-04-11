import { prisma } from '../lib/prisma'  



export const getAllUsers = async () => {
  return await prisma.user.findMany()
}


export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id }
  })
}


export const createUser = async (data: {
  name: string
  email: string
  password: string
  user_type: 'land_owner' | 'investor' | 'company'
}) => {
  return await prisma.user.create({ data })
}
