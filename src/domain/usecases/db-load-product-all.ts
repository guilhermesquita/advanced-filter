import { LoadProductAll } from "../contracts/repos";

export class DbLoadProductAll implements LoadProductAll {
  constructor(
    private readonly loadProductAllRepository: LoadProductAll
  ){}

  async loadAll(): Promise<LoadProductAll.Result>{
    return await this.loadProductAllRepository.loadAll()
  };
}
