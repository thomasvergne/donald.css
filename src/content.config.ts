import type { Loader } from "astro/loaders";
import { defineCollection } from "astro:content";
import { glob } from "glob";
import * as path from "path";
import * as fs from "node:fs/promises";

const components = defineCollection({
  loader: htmlLoader({ url: "src/collection/components" }),
});

export const collections = { components };

export function htmlLoader({ url }: { url: string }): Loader {
  return {
    name: "html-loader",
    async load({ logger, store }) {
      logger.info(`Loading ${url}`);
      const contents = await glob(path.join(url, "**/*.html"));
      store.clear();

      for (const file of contents) {
        const content = await fs.readFile(file, "utf-8");
        const fileName = file.replace(`${url}/`, "").replace(".html", "");

        store.set({
          id: fileName,
          data: {
            content,
            url,
          },
        });
      }
    },
  };
}
