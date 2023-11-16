-- CreateTable
CREATE TABLE "procedureProject" (
    "id" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" STRING NOT NULL,
    "machineName" STRING NOT NULL,
    "description" STRING NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "procedureProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "lastName" STRING NOT NULL,
    "phone" STRING NOT NULL,
    "address" STRING NOT NULL,
    "otracosa" STRING NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "procedureProject_machineName_key" ON "procedureProject"("machineName");
