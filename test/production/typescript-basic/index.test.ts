import path from 'path'
import { createNext, FileRef } from 'e2e-utils'
import { renderViaHTTP } from 'next-test-utils'
import { NextInstance } from 'test/lib/next-modes/base'

describe('TypeScript basic', () => {
  let next: NextInstance

  beforeAll(async () => {
    next = await createNext({
      files: new FileRef(path.join(__dirname, 'app')),
      dependencies: {
        '@next/bundle-analyzer': 'canary',
        typescript: 'latest',
        '@types/node': 'latest',
        '@types/react': 'latest',
        '@types/react-dom': 'latest',
      },
    })
  })
  afterAll(() => next.destroy())

  it('should not have eslint setup started', async () => {
    expect(next.cliOutput).not.toContain(
      'How would you like to configure ESLint'
    )
  })

  it('have built and started correctly', async () => {
    const html = await renderViaHTTP(next.url, '/')
    expect(html).toContain('hello world')
  })

  it('should work with babel', async () => {
    await next.stop()
    await next.patchFile(
      '.babelrc',
      JSON.stringify({ presets: ['next/babel'] })
    )
    await next.start()

    const html = await renderViaHTTP(next.url, '/')
    expect(html).toContain('hello world')
  })
})
