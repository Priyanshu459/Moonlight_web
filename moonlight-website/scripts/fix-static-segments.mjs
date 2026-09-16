import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
// Next 16.3 can emit backslash-based segment paths on Windows, while its
// browser client requests dot-separated names. Preserve originals and add
// byte-identical static aliases so the export works without server rewrites.
const root=path.resolve('out');
let count=0;
async function walk(directory,segmentRoot=null){
 for(const entry of await readdir(directory,{withFileTypes:true})){
  const file=path.join(directory,entry.name);
  if(entry.isDirectory())await walk(file,segmentRoot||(entry.name.startsWith('__next.')?{parent:directory}:null));
  else if(segmentRoot&&entry.name.endsWith('.txt')){
   const alias=path.join(segmentRoot.parent,path.relative(segmentRoot.parent,file).split(path.sep).join('.'));
   const bytes=await readFile(file);
   try{const existing=await readFile(alias);if(!existing.equals(bytes))throw new Error(`Conflicting segment alias: ${alias}`);}catch(error){if(error.code!=='ENOENT')throw error;await writeFile(alias,bytes);count++;}
  }
 }
}
await walk(root);
console.log(`Static route segment aliases: ${count} added.`);
