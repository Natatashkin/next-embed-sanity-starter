import { defineField } from "sanity";

export default defineField({
  name: "mainPageGroup",
  title: "Page blocks",
  type: "object",
  fields: [
    defineField({
      name: "blocks",
      title: "Blocks",
      options: {
        insertMenu: {
          views: [
            {
              name: "grid",
              previewImageUrl: (schemaTypeName) =>
                `/static/preview-${schemaTypeName.slice(0, -5)}.jpg`,
            },
          ],
        },
      },
      type: "array",
      of: [
        {
          type: "heroSliderBlock",
        },
        {
          type: "animatedMapBlock",
        },
        {
          type: "projectsSliderBlock",
        },
      ],
    }),
  ],
});
