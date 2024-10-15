import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "lib",
  external: [
    "@blaze-cardano/core",
    "@meshsdk/common",
    "@meshsdk/core",
    "@meshsdk/core-csl",
    "@utxorpc/sdk",
    "@utxorpc/spec",
  ],
  noExternal: []
});