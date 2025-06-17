import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'storage.json')

type StorageData = {
  current: number[] | null;
}

const defaultData: StorageData = {
  current: null,
}

function load(): StorageData {
  if (!fs.existsSync(filePath)) {
    save(defaultData)
  }

  try {
    const raw = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return defaultData
  }
}

function save(data: StorageData) {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

let data: StorageData = load()

export function getCurrentTrivia(): number[] | null {
  return data.current;
}

export function setCurrentTrivia(ids: number[]): void {
  data.current = ids;
  save(data);
}

export function clearCurrentTrivia(): void {
  data.current = null
  save(data)
}
