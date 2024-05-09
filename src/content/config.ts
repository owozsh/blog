import { defineCollection, z } from "astro:content";

const base_post_collection_schema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  dev: base_post_collection_schema,
  "product-reviews": base_post_collection_schema,
  thoughts: base_post_collection_schema,
};
