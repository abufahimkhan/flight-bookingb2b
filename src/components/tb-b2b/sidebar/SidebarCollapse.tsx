"use client";
import { Sidebar, SidebarBody, SidebarItem, SidebarList } from "keep-react";
import { cn } from "keep-react/utils";
import {
  ClockCounterClockwise,
  CreditCard,
  Gear,
  Headset,
  MagnifyingGlass,
  Percent,
  Share,
  Stack,
  User,
  Users,
} from "phosphor-react";

const SidebarCollapse = ({ className }: any) => {
  return (
    <Sidebar
      className={cn(
        "w-full shadow-none rounded-none border-none tb-sidebar",
        className
      )}
    >
      <SidebarBody className="space-y-4">
        <SidebarList className="space-y-1 text-secondary-main">
          <SidebarItem>
            <MagnifyingGlass size={25} />
          </SidebarItem>

          <SidebarItem>
            <Share size={25} />
          </SidebarItem>

          <SidebarItem>
            <ClockCounterClockwise size={25} />
          </SidebarItem>

          <SidebarItem>
            <Users size={25} />
          </SidebarItem>

          <SidebarItem>
            <Percent size={25} />
          </SidebarItem>

          <SidebarItem>
            <Headset size={25} />
          </SidebarItem>

          <SidebarItem>
            <User size={25} />
          </SidebarItem>

          <SidebarItem>
            <ClockCounterClockwise size={25} />
          </SidebarItem>

          <SidebarItem>
            <Gear size={25} />
          </SidebarItem>

          <SidebarItem>
            <Stack size={25} />
          </SidebarItem>

          <SidebarItem>
            <CreditCard size={25} />
          </SidebarItem>
        </SidebarList>
      </SidebarBody>
    </Sidebar>
  );
};

export default SidebarCollapse;
