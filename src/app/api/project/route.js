import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export const dynamic = "force-dynamic";

const prisma = new PrismaClient();


export async function main() {
	try {
		await prisma.$connect();
	} catch (err) {
		return Error("Fail DB connect");
	}
}

export async function GET(req, res) {
    try {
		await main();
        const projects = await prisma.project.findMany();
        return NextResponse.json({ message: "Success", projects }, { status: 200 });
    } catch (err) {
		return NextResponse.json({ message: "Error", err }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
}