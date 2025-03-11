import components from "@/app/components/index";
import { IDynamicBlock } from "@/app/utils/types";

interface Props {
  block: IDynamicBlock;
}

const BlockBuilder = ({ block }: Props) => {
  const Component = components[block._type.slice(0, -5)];

  if (!Component) {
    console.warn(`Undefined block type: ${block._type}`);
    return null;
  }

  return <Component {...block} />;
};

export default BlockBuilder;
