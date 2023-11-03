export const env = {
  port: process.env.PORT ?? 3000,
  host: 'localhost',
  database: 'jlx'
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
