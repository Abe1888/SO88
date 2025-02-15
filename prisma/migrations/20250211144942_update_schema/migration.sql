/*
  Warnings:

  - The primary key for the `FormSubmission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `additionalDetails` on the `FormSubmission` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.
  - You are about to alter the column `blogPost` on the `FormSubmission` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.
  - You are about to alter the column `blogPromotion` on the `FormSubmission` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.
  - You are about to alter the column `branding` on the `FormSubmission` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.
  - You are about to alter the column `contentStrategy` on the `FormSubmission` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.
  - You are about to alter the column `engagement` on the `FormSubmission` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.
  - You are about to alter the column `performanceMetrics` on the `FormSubmission` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.
  - You are about to alter the column `seoStrategy` on the `FormSubmission` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.
  - You are about to alter the column `socialMedia` on the `FormSubmission` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.
  - Made the column `additionalDetails` on table `FormSubmission` required. This step will fail if there are existing NULL values in that column.
  - Made the column `blogPost` on table `FormSubmission` required. This step will fail if there are existing NULL values in that column.
  - Made the column `blogPromotion` on table `FormSubmission` required. This step will fail if there are existing NULL values in that column.
  - Made the column `branding` on table `FormSubmission` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contentStrategy` on table `FormSubmission` required. This step will fail if there are existing NULL values in that column.
  - Made the column `engagement` on table `FormSubmission` required. This step will fail if there are existing NULL values in that column.
  - Made the column `performanceMetrics` on table `FormSubmission` required. This step will fail if there are existing NULL values in that column.
  - Made the column `seoStrategy` on table `FormSubmission` required. This step will fail if there are existing NULL values in that column.
  - Made the column `socialMedia` on table `FormSubmission` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyName" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "socialMedia" JSONB NOT NULL,
    "branding" JSONB NOT NULL,
    "contentStrategy" JSONB NOT NULL,
    "engagement" JSONB NOT NULL,
    "blogPost" JSONB NOT NULL,
    "blogPromotion" JSONB NOT NULL,
    "seoStrategy" JSONB NOT NULL,
    "performanceMetrics" JSONB NOT NULL,
    "additionalDetails" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_FormSubmission" ("additionalDetails", "blogPost", "blogPromotion", "branding", "companyName", "contactName", "contentStrategy", "createdAt", "email", "engagement", "id", "performanceMetrics", "seoStrategy", "socialMedia") SELECT "additionalDetails", "blogPost", "blogPromotion", "branding", "companyName", "contactName", "contentStrategy", "createdAt", "email", "engagement", "id", "performanceMetrics", "seoStrategy", "socialMedia" FROM "FormSubmission";
DROP TABLE "FormSubmission";
ALTER TABLE "new_FormSubmission" RENAME TO "FormSubmission";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
