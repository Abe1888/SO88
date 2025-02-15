-- CreateTable
CREATE TABLE "FormSubmission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "companyName" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "socialMedia" TEXT,
    "branding" TEXT,
    "contentStrategy" TEXT,
    "engagement" TEXT,
    "blogPost" TEXT,
    "blogPromotion" TEXT,
    "seoStrategy" TEXT,
    "performanceMetrics" TEXT,
    "additionalDetails" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
