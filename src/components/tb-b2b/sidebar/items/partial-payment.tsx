import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
import { CaretDown, ClipboardText, Percent } from "phosphor-react";

const PartialPayment = () => {
  return (
    <SidebarItem dropdown>
      <SidebarDropdown>
        <SidebarCollapse>
          <div className="flex items-center gap-3">
            <span>
              <Percent size={25} />
            </span>
            <span>Partial Payment</span>
          </div>
          <span className="group-open:-rotate-180">
            <CaretDown size={20} />
          </span>
        </SidebarCollapse>

        <SidebarDropdownList>
          <SidebarItem>
            <ClipboardText size={25} />
            Due List
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default PartialPayment;
