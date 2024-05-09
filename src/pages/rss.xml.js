import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const dev = await getCollection("dev");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: dev.map((post) => ({
      ...post.data,
      link: `/dev/${post.slug}/`,
    })),
  });
}
