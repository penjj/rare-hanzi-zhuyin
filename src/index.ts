import defaultDirectory from './rare-hanzi-zhuyin'

let directory: Record<string, string> | null = null;
export function setDirectory(dir: Record<string, string>): void {
  directory = dir
}

export function useDefaultDirectory(): void {
  if (directory !== defaultDirectory)
   directory = Object.freeze(defaultDirectory)
}

export function zhuyin(hanzi: string): string | undefined {
  if (!directory) {
    throw new Error('Directory not set')
  }
  if (hanzi.length > 1) {
    throw new Error('Only single hanzi characters are supported')
  }
  return directory[hanzi]
}

export {
  defaultDirectory
}