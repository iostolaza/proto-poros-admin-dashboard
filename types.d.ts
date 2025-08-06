// types.d.ts
// Removed Vite-specific ?raw for esbuild compatibility.
// References:
// - Angular docs: https://angular.dev/guide/typescript-configuration (v20.1.0)

declare module '*.svg' {
  const content: string;
  export default content;
}
