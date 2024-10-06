"use client";
import { Button, Dropdown, DropdownAction, DropdownContent } from "keep-react";
import { Bell } from "phosphor-react";

const Notifications = () => {
  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button variant="outline">
          <Bell size={20} />
        </Button>
      </DropdownAction>
      <DropdownContent>
        <div>notifications</div>
      </DropdownContent>
    </Dropdown>
  );
};

export default Notifications;
