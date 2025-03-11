// https://github.com/portabletext/react-portabletext
// https://www.sanity.io/docs/block-content
import { PortableTextComponents, PortableText } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {},
  types: {},
  list: {},
  marks: {
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      const rel = target === "_blank" ? "noindex nofollow" : undefined;
      return (
        <a href={value?.href} target={target} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

const RichEditor = ({ value }: any) => {
  return (
    <div>
      <PortableText value={value} components={components} />
    </div>
  );
};

export default RichEditor;
