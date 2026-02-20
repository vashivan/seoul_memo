import "dotenv/config";
import { PrismaClient } from "@/app/generated/prisma";
import { PrismaNeon } from "@prisma/adapter-neon";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("Missing DATABASE_URL");

export const prisma = new PrismaClient({
  adapter: new PrismaNeon({ connectionString }),
});