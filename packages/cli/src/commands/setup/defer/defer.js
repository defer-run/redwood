import { recordTelemetryAttributes } from '@redwoodjs/cli-helpers'

export const command = 'defer'

export const description =
  'Configure the web side to Defer as a background jobs handler'

export const builder = (yargs) => {
  yargs.option('force', {
    alias: 'f',
    default: false,
    description: 'Overwrite existing configuration',
    type: 'boolean',
  })
  yargs.option('verbose', {
    alias: 'v',
    default: false,
    description: 'Print more logs',
    type: 'boolean',
  })
}

export const handler = async (options) => {
  recordTelemetryAttributes({
    command: 'setup defer',
    force: options.force,
    verbose: options.verbose
  })
  const { handler } = await import('./deferHandler.js')
  return handler(options)
}
