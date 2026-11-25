"use client";

import type { ImageLoaderProps } from "next/image";
import manifest from "./generated/image-manifest.json";

/** Resolves only to files created at build time; never calls an image service. */
export default function staticImageLoader({ src, width }: ImageLoaderProps) {
  const variants = manifest[src as keyof typeof manifest];
  if (!variants) {
    throw new Error(`Missing static image: ${src}. Add it to scripts/build-images.mjs.`);
  }
  return (variants.find((variant) => variant.width >= width) ?? variants[variants.length - 1]).src;
}
