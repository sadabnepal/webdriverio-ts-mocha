import fs from 'fs'

export const deleteDirectory = (filepath: string) => {
    if (fs.existsSync(filepath))
        fs.rmdirSync(filepath, { recursive: true })
}