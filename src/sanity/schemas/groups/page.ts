import { defineField } from "sanity";

export default defineField({
  name: "pageGroups",
  title: "Page blocks",
  type: "object",
  fields: [
    defineField({
      name: "blocks",
      title: "Blocks",
      options: {
        insertMenu: {
          groups: [
            {
              name: "main",
              title: "Main",
              of: [
                "heroSliderBlock",
                "animatedMapBlock",
                "projectsSliderBlock",
              ],
            },
            {
              name: "projects",
              title: "Projects",
              of: ["projectsListBlock"],
            },
          ],
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
        {
          type: "projectsListBlock",
        },
      ],
    }),
  ],
});
