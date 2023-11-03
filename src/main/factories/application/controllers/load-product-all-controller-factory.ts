import { Controller } from "@/application/contracts";
import { LoadProductAllController } from "@/application/controllers/load-product-all";
import { makeDbLoadProductAll } from "../../domain/usecases";
import { makePgTransactionController } from "../decorators";

export const makeLoadProductAllController = (): Controller => {
  const controller = new LoadProductAllController(makeDbLoadProductAll())
  return makePgTransactionController(controller)
}
