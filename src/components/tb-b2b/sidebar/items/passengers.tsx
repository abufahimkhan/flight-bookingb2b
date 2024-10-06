import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
import { CaretDown, Checks, Plus, Users } from "phosphor-react";
import React from "react";

const Passengers = () => {
  return (
    <SidebarItem dropdown>
      <SidebarDropdown>
        <SidebarCollapse>
          <div className="flex items-center gap-3">
            <span>
              <Users size={25} />
            </span>
            <span>Passengers</span>
          </div>
          <span className="group-open:-rotate-180">
            <CaretDown size={20} />
          </span>
        </SidebarCollapse>

        <SidebarDropdownList>
          <SidebarItem>
            <Plus size={25} />
            Add Passenger
          </SidebarItem>
          <SidebarItem>
            <Checks size={25} />
            Quick Passenger
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default Passengers;
