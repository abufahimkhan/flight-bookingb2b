import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
import { CaretDown, HourglassMedium, Lock, User } from "phosphor-react";

const Profile = () => {
  return (
    <SidebarItem dropdown>
      <SidebarDropdown>
        <SidebarCollapse>
          <div className="flex items-center gap-3">
            <span>
              <User size={25} />
            </span>
            <span>Profile</span>
          </div>
          <span className="group-open:-rotate-180">
            <CaretDown size={20} />
          </span>
        </SidebarCollapse>

        <SidebarDropdownList>
          <SidebarItem>
            <User size={25} />
            User
          </SidebarItem>
          <SidebarItem>
            <HourglassMedium size={25} />
            Company
          </SidebarItem>
          <SidebarItem>
            <Lock size={25} />
            Authentication
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default Profile;
