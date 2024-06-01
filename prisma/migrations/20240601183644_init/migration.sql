-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashPwd" TEXT NOT NULL,
    "role" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
