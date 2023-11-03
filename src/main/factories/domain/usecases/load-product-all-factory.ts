import { DbLoadProductAll } from "@/domain/usecases"
import { PgProductRepository } from "@/infra/repos/sqlite"

export const makeDbLoadProductAll = () => {
  const productRepository = new PgProductRepository()
  return new DbLoadProductAll(productRepository)
}
