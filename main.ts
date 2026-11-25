// make.fun entry for news-image-20261125.
// The prepared news poster sits next to this file and is copied to /output/entry.png.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const destination = join(outputDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`missing entry image: ${source}`);
}
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
console.log(`wrote ${destination}`);
