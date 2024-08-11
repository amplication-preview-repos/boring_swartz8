/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Tool as PrismaTool,
  Promotion as PrismaPromotion,
  Rating as PrismaRating,
  Transaction as PrismaTransaction,
} from "@prisma/client";

export class ToolServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ToolCountArgs, "select">): Promise<number> {
    return this.prisma.tool.count(args);
  }

  async tools(args: Prisma.ToolFindManyArgs): Promise<PrismaTool[]> {
    return this.prisma.tool.findMany(args);
  }
  async tool(args: Prisma.ToolFindUniqueArgs): Promise<PrismaTool | null> {
    return this.prisma.tool.findUnique(args);
  }
  async createTool(args: Prisma.ToolCreateArgs): Promise<PrismaTool> {
    return this.prisma.tool.create(args);
  }
  async updateTool(args: Prisma.ToolUpdateArgs): Promise<PrismaTool> {
    return this.prisma.tool.update(args);
  }
  async deleteTool(args: Prisma.ToolDeleteArgs): Promise<PrismaTool> {
    return this.prisma.tool.delete(args);
  }

  async findPromotions(
    parentId: string,
    args: Prisma.PromotionFindManyArgs
  ): Promise<PrismaPromotion[]> {
    return this.prisma.tool
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .promotions(args);
  }

  async findRatings(
    parentId: string,
    args: Prisma.RatingFindManyArgs
  ): Promise<PrismaRating[]> {
    return this.prisma.tool
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .ratings(args);
  }

  async findTransactions(
    parentId: string,
    args: Prisma.TransactionFindManyArgs
  ): Promise<PrismaTransaction[]> {
    return this.prisma.tool
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .transactions(args);
  }
}