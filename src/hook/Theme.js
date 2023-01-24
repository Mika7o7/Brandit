import { useLayoutEffect, useState } from "react";

export const useTheme = (value) => {
  const [theme, setTheme] = useState(value);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
