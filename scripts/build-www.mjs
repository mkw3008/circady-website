// Baut aus der statischen Website ein sauberes Web-Root (www/) fuer Capacitor.
// Capacitor kopiert webDir rekursiv nach ios/App/App/public -- deshalb darf webDir
// nicht das Projektverzeichnis selbst sein (node_modules/, .git/, ios/ wuerden mitwandern).
import { cp, rm, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'www');

// Alles, was im WebView ausgeliefert werden soll.
const entries = [
  'index.html',
  'protocols.html',
  'privacy.html',
  'support.html',
  'imprint.html',
  'assets',
];

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

for (const entry of entries) {
  await cp(join(root, entry), join(out, entry), { recursive: true });
}

console.log(`www/ gebaut: ${entries.join(', ')}`);
