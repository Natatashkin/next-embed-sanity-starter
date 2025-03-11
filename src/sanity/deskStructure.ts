import { StructureBuilder, StructureResolverContext } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { AddDocumentIcon } from "@sanity/icons";
import { ProjectsIcon } from "@sanity/icons";

const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "page",
        title: "Pages",
        S,
        context,
        icon: AddDocumentIcon,
      }),
      orderableDocumentListDeskItem({
        type: "project",
        title: "Projects",
        S,
        context,
        icon: ProjectsIcon,
      }),
    ]);

export default structure;
