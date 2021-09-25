import chalk from 'chalk'

export const log = {
  info (msg: string) {
    console.log(chalk.blue(msg))
  },
  success (msg: string) {
    console.log(chalk.green(msg))
  },
  fail (msg: string) {
    console.log(chalk.red(msg))
  }
}
