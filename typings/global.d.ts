import h from "react-hyperscript";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { ApplicationProps } from "react-rainbow-components/components/Application";

declare global {
  namespace Config {
    interface IPackage {
      HOME_PAGE: string;
    }

    interface IGlobalVars {
      THEME_CACHE_KEY: string;
      TITLE: string;
      PACKAGE: IPackage;
    }
  }

  const GLOBAL_VARS: Config.IGlobalVars;

  namespace RouterComponent {
    interface IRoutesItem {
      path: string;
      component: () => HyperScript.ReturnType;
      exact?: boolean;
    }

    type Function = (
      router: IRoutesItem[],
      array?: HyperScript.ReturnType[]
    ) => HyperScript.ReturnType[];
  }

  namespace GroupMaker {
    type Function = (
      array: HyperScript.ReturnType[],
      column: number,
      row: number
    ) => HyperScript.ReturnType;
  }

  namespace SideBarComponent {
    type Function = () => HyperScript.ReturnType;
    type HandleRouteFunction = (path: string) => void;

    interface Class {
      state: {
        selectedItem: string;
      };
      handleRoute: HandleRouteFunction;
      handleOnSelect: (_event: any, selectedItem: string) => void;
    }

    namespace Item {
      type Label = (label: string) => HyperScript.ReturnType;
      type Function = (
        handleRoute: HandleRouteFunction,
        selectedItem: string,
        array?: HyperScript.ReturnType[]
      ) => HyperScript.ReturnType[];

      interface IPropsType {
        name: string;
        label: string;
        icon: IconProp;
        path: string;
      }
    }
  }

  namespace IconComponent {
    type Function = (props: IIconComponentProps) => JSX.Element;
  }

  namespace PageComponent {
    type Function = (...props: any) => HyperScript.ReturnType;
  }

  namespace MainLayoutComponent {
    type Function = (...props: any) => HyperScript.ReturnType;
  }

  namespace HyperScript {
    type ElementPropType = Parameters<typeof h>[0];
    type ReturnType = ReturnType<typeof h>;
  }

  namespace RainBowNameSpace {
    namespace Theme {
      interface ITheme {
        dark: any;
        light?: any;
      }

      interface ITheme {
        dark?: any;
        light: any;
      }

      type ThemeProps = "dark" | "light";
    }
  }
}
