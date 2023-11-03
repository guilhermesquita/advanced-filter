import { PgConnection } from '@/infra/repos/sqlite/helpers'

export const makePgConnection = (): PgConnection => {
  return PgConnection.getInstance()
}
