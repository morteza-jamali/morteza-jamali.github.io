import themes from "../theme/theme";

function isThemeName(
  name: RainBowNameSpace.Theme.ThemeProps | undefined
): name is RainBowNameSpace.Theme.ThemeProps {
  return (
    (name as RainBowNameSpace.Theme.ThemeProps) === "dark" ||
    (name as RainBowNameSpace.Theme.ThemeProps) === "light"
  );
}

function theme(name?: RainBowNameSpace.Theme.ThemeProps) {
  if (name) {
    window.localStorage.setItem(GLOBAL_VARS.THEME_CACHE_KEY, name);
  } else {
    const themeCacheValue: any = window.localStorage.getItem(
      GLOBAL_VARS.THEME_CACHE_KEY
    );
    name = isThemeName(themeCacheValue) ? themeCacheValue : "dark";
  }

  return (themes as RainBowNameSpace.Theme.ITheme)[name].rainbow;
}

export default theme;
