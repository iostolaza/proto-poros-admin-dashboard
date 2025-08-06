// generate-icons.ts
// Node script to generate icons-registry.ts with static raw imports and registrations.
// Run: npm run generate-icons
// References:
// - Node docs: https://nodejs.org/api/fs.html (v20.x, readdirSync recursive)
// - StackOverflow: https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search (recursive scan)

import fs from 'fs';
import path from 'path';

const iconsDir: string = 'src/assets/icons';
const outputFile: string = 'src/app/icons-registry.ts';
const imports: string[] = [];
const registrations: string[] = [];
let importIndex: number = 0;

// Recursive function to find .svg files
function findSvgs(dir: string): void {
  fs.readdirSync(dir).forEach((file: string) => {
    const fullPath: string = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findSvgs(fullPath);
    } else if (file.endsWith('.svg')) {
      const relPath: string = path.relative('src/app', fullPath).replace(/\\/g, '/'); // Relative from src/app
      const name: string = path.relative(iconsDir, fullPath).replace(/\.svg$/, '').replace(/\//g, '-').toLowerCase();
      const varName: string = `icon${importIndex++}`;
      imports.push(`import ${varName} from '../${relPath}';`); // No ?raw; use loader 'text'
      registrations.push(`registry.addSvg('${name}', ${varName});`);
    }
  });
}

findSvgs(iconsDir);

const content: string = `// src/app/icons-registry.ts
// Generated file - do not edit manually. Run 'npm run generate-icons'.
// Registers all SVGs with angular-svg-icon.

import { SvgIconRegistryService } from 'angular-svg-icon';

${imports.join('\n')}

export function registerIcons(registry: SvgIconRegistryService): void {
  ${registrations.join('\n  ')}
}
`;

fs.writeFileSync(outputFile, content);
console.log(`Generated ${outputFile} with ${importIndex} icons.`);
