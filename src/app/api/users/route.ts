import prisma from "@/../libs/prismadb"
import {NextResponse} from "next/server";

export const GET = async () => {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (err) {
        return NextResponse.json({ message: "failed to find users", err}, { status: 500 });
    }
}

export const POST = async (request: Request) => {
    try {
        const body = await request.json();
        const { email, password } = body;
        const newUser = await prisma.user.create({
            data: { email: email, password: password}
        });

        return NextResponse.json(newUser);
    } catch (err) {
        return NextResponse.json({ message: "failed to create user", err}, { status: 500 });
    }
}