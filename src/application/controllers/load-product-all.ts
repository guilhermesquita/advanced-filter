import { LoadProductAll } from "@/domain/contracts/repos";
import { Controller, HttpResponse } from "../contracts";
import { noContent, ok } from "../helpers";

export class LoadProductAllController implements Controller{
  constructor(
    private readonly loadProductAllRepository: LoadProductAll
  ){}

  async handle(): Promise<HttpResponse>{
    const teste = await this.loadProductAllRepository.loadAll()
    return teste?.length ? ok(teste) : noContent()
  };
}
