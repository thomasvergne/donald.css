import type { CollectionEntry } from "astro:content";

export function groupByPrefix<T extends "components">(
  arr: CollectionEntry<T>[]
): Record<string, CollectionEntry<T>[]> {
  return arr.reduce((acc, item) => {
    const prefix = item.id.split("/")[0];
    if (!acc[prefix]) acc[prefix] = [];
    acc[prefix].push(item);
    return acc;
  }, {} as Record<string, CollectionEntry<T>[]>);
}
