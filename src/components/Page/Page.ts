import h from "react-hyperscript";

const Page: PageComponent.Function = ({
  children,
  ...rest
}: {
  children?: any;
}) => h(".container.no-padding.width-100.height-100", { ...rest }, children);

export default Page;
