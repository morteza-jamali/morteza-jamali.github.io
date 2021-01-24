import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import h from "react-hyperscript";

declare global {
  namespace SideBarComponent {
    type Function = () => HyperScript.ReturnType;

    namespace Item {
      interface IPropsType {
        name: string;
        label: string;
        icon: IconProp;
      }
    }
  }

  namespace IconComponent {
    type Function = (props: FontAwesomeIconProps) => JSX.Element;
  }

  namespace PageComponent {
    type Function = (...props: any) => any;
  }

  interface IRoutesItem {
    path: string;
    component: () => HyperScript.ReturnType;
    exact?: boolean;
  }

  namespace HyperScript {
    type ElementPropType = Parameters<typeof h>[0];
    type ReturnType = ReturnType<typeof h>;
  }
}
