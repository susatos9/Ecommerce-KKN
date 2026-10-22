export { default as createTable } from './createTableQueryConstructor';
export { default as rebuildTable } from './rebuildTable';
export const q = (s: string) => `"${s.replace(/"/g, '""')}"`;
export const hashOf = (s: string) => new Bun.CryptoHasher('sha256').update(s).digest('hex');
export { tableFromJson } from './table';
