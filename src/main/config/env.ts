export const env = {
  port: process.env.PORT ?? 3000,
  host: 'locahost',
  database: 'jlx.db'
}

function handleBoolean(
  env_variable: string | undefined,
  default_value: boolean = true
): boolean {
  if (!env_variable) {
    return default_value
  } else {
    return env_variable === 'true'
  }
}
