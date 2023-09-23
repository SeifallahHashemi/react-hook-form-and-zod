import prisma from "@/../libs/prismadb"
import {NextResponse} from "next/server";

export const GET = async (request: Request, { params }: { params: { id: string }}) => {
    const { id } = params;
    console.log(id.toString())
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id.toString()
            }
        });
        if (!user) {
            return NextResponse.json({ message: "User not found"}, { status: 404})
        }
        return NextResponse.json(user);
    } catch (err) {
        return NextResponse.json({ message: "failed to find user", err}, { status: 500 });
    }
}

export const PATCH = async (request: Request, { params }: { params: { id: string }}) => {
    const { id } = params;
    try {
        const body = await request.json();
        const { email, password } = body;
        const updateUser = await prisma.user.update({
            where: {
                id: id.toString()
            },
            data: { email, password}
        });
        if (!updateUser) {
            return NextResponse.json({ message: "User not found"}, { status: 404})
        }
        return NextResponse.json(updateUser);
    } catch (err) {
        return NextResponse.json({ message: "failed to find user", err}, { status: 500 });
    }
}

export const DELETE = async (request: Request, { params }: { params: { id: string }}) => {
    const { id } = params;
    try {
        await prisma.user.delete({
            where: {
                id: id.toString()
            }
        });
        return NextResponse.json("user has been deleted");
    } catch (err) {
        return NextResponse.json({ message: "failed to find user", err}, { status: 500 });
    }
}