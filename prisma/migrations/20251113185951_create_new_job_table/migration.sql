-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "zipCode" VARCHAR(8) NOT NULL,
    "description" TEXT,
    "openPosition" INTEGER NOT NULL,
    "availablePosition" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
