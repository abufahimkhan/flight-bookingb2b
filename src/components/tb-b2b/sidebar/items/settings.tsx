import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
import { CaretDown, Gear, Globe, Notification, User } from "phosphor-react";

const Settings = () => {
  return (
    <SidebarItem dropdown>
      <SidebarDropdown>
        <SidebarCollapse>
          <div className="flex items-center gap-3">
            <span>
              <Gear size={25} />
            </span>
            <span>Settings</span>
          </div>
          <span className="group-open:-rotate-180">
            <CaretDown size={20} />
          </span>
        </SidebarCollapse>

        <SidebarDropdownList>
          <SidebarItem>
            <Globe size={25} />
            Portal
          </SidebarItem>
          <SidebarItem>
            <Notification size={25} />
            Notification
          </SidebarItem>
          <SidebarItem>
            <User size={25} />
            User
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default Settings;
