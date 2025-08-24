// create-folders.js
import { mkdirSync } from "fs";
import { join } from "path";

const folders = [
  "src/assets",
  "src/components",
  "src/pages",
  "src/hooks",
  "src/context",
  "src/styles",
  "src/utils",
  "src/services"
];

folders.forEach(folder => {
  const path = join(process.cwd(), folder);
  try {
    mkdirSync(path, { recursive: true });
    console.log(`✅ Created: ${folder}`);
  } catch (err) {
    console.error(`❌ Could not create ${folder}:`, err);
  }
});
