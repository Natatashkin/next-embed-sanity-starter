import { defineType, defineField } from "sanity";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default defineType({
  name: "page",
  title: "Pages",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "richTextType",
    }),
    defineField({
      name: "blocks",
      title: "Page blocks",
      type: "pageGroups",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
    orderRankField({ type: "page" }),
  ],
});
