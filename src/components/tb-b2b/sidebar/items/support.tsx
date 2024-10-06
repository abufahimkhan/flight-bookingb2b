import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
import { CaretDown, Headset, Phone, Question, Ticket } from "phosphor-react";

const Support = () => {
  return (
    <SidebarItem dropdown>
      <SidebarDropdown>
        <SidebarCollapse>
          <div className="flex items-center gap-3">
            <span>
              <Headset size={25} />
            </span>
            <span>Support</span>
          </div>
          <span className="group-open:-rotate-180">
            <CaretDown size={20} />
          </span>
        </SidebarCollapse>

        <SidebarDropdownList>
          <SidebarItem>
            <Phone size={25} />
            Contact
          </SidebarItem>
          <SidebarItem>
            <Question size={25} />
            FAQ
          </SidebarItem>
          <SidebarItem>
            <Ticket size={25} />
            Ticketing system
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default Support;
