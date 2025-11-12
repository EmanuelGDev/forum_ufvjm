import { app } from "../../../server"
import { prisma } from "../../lib/prisma";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

class AuthService {

    private app

    constructor(app: any) {
        this.app = app;
    }

    async login(email: string, password: string) {
        const jwt_secret = process.env.JWT_SECRET as string

        if (!email || !password) {
            throw new Error("Missing required arguments")
        }

        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) {
            throw new Error("Invalid credentials")
        }

        const matchPassoword = await bcrypt.compare(password, user.password)

        if (!matchPassoword) {
            throw new Error("Invalid credentials")
        }

        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        }, jwt_secret,
            { expiresIn: "12h" })

        return {
            token,
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        }
    }
}

export { AuthService }