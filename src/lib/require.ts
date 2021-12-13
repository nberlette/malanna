import { createRequire } from 'module'
export const require: NodeRequire = createRequire(import.meta.url);
export default require;
