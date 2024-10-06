"use client";
import {
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownList,
} from "keep-react";
import { useTheme } from "next-themes";
import { MoonStars, SunDim } from "phosphor-react";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  const [client, setClient] = useState(false);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      setClient(true);
    }
    return () => {
      ignore = true;
    };
  }, []);

  return client ? (
    <Dropdown placement="bottom-start">
      <DropdownAction asChild>
        <Button variant="outline">
          <MoonStars size={20} className="hidden dark:block" />
          <SunDim size={20} className="block dark:hidden" />
        </Button>
      </DropdownAction>
      <DropdownContent className="w-[150px] dark:bg-secondary-main">
        <DropdownList className="flex flex-col">
          <Button variant="link" onClick={() => setTheme("light")}>
            Light
          </Button>
          <Button variant="link" onClick={() => setTheme("dark")}>
            Dark
          </Button>
          <Button variant="link" onClick={() => setTheme("system")}>
            System
          </Button>
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  ) : null;
};

export default ThemeSwitcher;
