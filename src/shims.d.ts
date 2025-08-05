// src/shims.d.ts (corrected for @types/node v20+ compatibility)
// Use this if other shims are needed; otherwise, delete the file entirely
declare var global: typeof globalThis;  // Modern standard for global object in Node/TS
