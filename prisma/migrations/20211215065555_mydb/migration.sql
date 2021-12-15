-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "plans" TEXT NOT NULL,
    "specification" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Trade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "Trade_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Parameters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estimateValue" INTEGER NOT NULL,
    "contractValue" INTEGER NOT NULL,
    "subName" TEXT NOT NULL,
    "subAcceptance" BOOLEAN NOT NULL,
    "subQuote" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SubContractor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "estimateValue" INTEGER NOT NULL,
    "contractValue" INTEGER NOT NULL,
    "subAcceptance" TEXT NOT NULL,
    "subQuote" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Trade_code_key" ON "Trade"("code");
