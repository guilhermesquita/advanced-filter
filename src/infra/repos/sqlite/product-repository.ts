import { LoadProductAll } from "@/domain/contracts/repos";
import { PgConnection } from "./helpers";
import { PgProduct } from "./entities";
import { Product } from "@/domain/entities";

export class PgProductRepository implements LoadProductAll {
  async loadAll(): Promise<LoadProductAll.Result> {
    const productRepo = PgConnection.getInstance()
      .connect()
      .getRepository(PgProduct)

    const product = await productRepo.find()

    return product as Product[]
  };
}
