"use client";

import { cn } from "keep-react/utils";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";
import ThemeSwitcher from "@/themes/ThemeSwitcher";

const Header = ({ className }: any) => {
  return (
    <header
      className={cn(
        "sticky z-10 bg-secondary-main top-0 flex gap-5 items-center  px-5 py-5 w-full max-h-full",
        className
      )}
    >
      <Search />
      <ThemeSwitcher />
      <Notifications />

      <Profile />
    </header>
  );
};

export default Header;
