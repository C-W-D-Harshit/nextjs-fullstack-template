"use client";

import { Theme, ThemePanel } from "@radix-ui/themes";
import LayoutProvider from "./layout/LayoutProvider";
import { ThemeProvider as Themes } from "next-themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Themes attribute="class" defaultTheme="system" enableSystem>
      <Theme>
        <LayoutProvider>{children}</LayoutProvider>
        {/* <ThemePanel /> */}
      </Theme>
    </Themes>
  );
};

export default ThemeProvider;
