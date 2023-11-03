import { Product } from "@/domain/entities";

export interface LoadProductAll{
  loadAll: () => Promise<LoadProductAll.Result>;
}

export namespace LoadProductAll{
  export type Result = Product[]
}
