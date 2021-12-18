-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "permissions" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jobCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "plansURL" TEXT NOT NULL,
    "specificationURL" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserProject" (
    "userId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    PRIMARY KEY ("userId", "projectId"),
    CONSTRAINT "UserProject_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Trade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectId" INTEGER NOT NULL,
    "costCode" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "tenders" TEXT NOT NULL,
    "assigned" TEXT NOT NULL,
    "estimateValue" INTEGER NOT NULL,
    "contractValue" INTEGER NOT NULL,
    "subAgreementStatus" TEXT NOT NULL,
    "subAgreementURL" TEXT NOT NULL,
    CONSTRAINT "Trade_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Project_jobCode_key" ON "Project"("jobCode");

-- CreateIndex
CREATE UNIQUE INDEX "Project_plansURL_key" ON "Project"("plansURL");

-- CreateIndex
CREATE UNIQUE INDEX "Project_specificationURL_key" ON "Project"("specificationURL");

-- CreateIndex
CREATE UNIQUE INDEX "Trade_costCode_key" ON "Trade"("costCode");

-- CreateIndex
CREATE UNIQUE INDEX "Trade_name_key" ON "Trade"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Trade_subAgreementURL_key" ON "Trade"("subAgreementURL");
