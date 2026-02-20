-- CreateTable
CREATE TABLE "Box" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "boxPrice" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Box_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorySlide" (
    "id" SERIAL NOT NULL,
    "boxId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "kicker" TEXT,
    "title" TEXT,

    CONSTRAINT "StorySlide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoryLine" (
    "id" SERIAL NOT NULL,
    "slideId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "StoryLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoxItem" (
    "id" SERIAL NOT NULL,
    "boxId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT,
    "imageUrl" TEXT,
    "imageAlt" TEXT,

    CONSTRAINT "BoxItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemVariant" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "ItemVariant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Box_slug_key" ON "Box"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "StorySlide_boxId_order_key" ON "StorySlide"("boxId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "StoryLine_slideId_order_key" ON "StoryLine"("slideId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "BoxItem_boxId_order_key" ON "BoxItem"("boxId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "ItemVariant_itemId_order_key" ON "ItemVariant"("itemId", "order");

-- AddForeignKey
ALTER TABLE "StorySlide" ADD CONSTRAINT "StorySlide_boxId_fkey" FOREIGN KEY ("boxId") REFERENCES "Box"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryLine" ADD CONSTRAINT "StoryLine_slideId_fkey" FOREIGN KEY ("slideId") REFERENCES "StorySlide"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoxItem" ADD CONSTRAINT "BoxItem_boxId_fkey" FOREIGN KEY ("boxId") REFERENCES "Box"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemVariant" ADD CONSTRAINT "ItemVariant_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "BoxItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
