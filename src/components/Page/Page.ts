import h from "react-hyperscript";

const Page: PageComponent.Function = ({
  children,
  ...rest
}: {
  children?: any;
}) => h(".container.no-padding.flex-1-1-auto.flex", { ...rest }, children);

export default Page;
