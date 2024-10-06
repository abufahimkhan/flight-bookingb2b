"use client";
import { Sidebar, SidebarBody, SidebarItem, SidebarList } from "keep-react";
import { cn } from "keep-react/utils";
import {
  ClockCounterClockwise,
  CreditCard,
  MagnifyingGlass,
  Share,
} from "phosphor-react";
import BookingHistory from "./items/booking-history";
import PartialPayment from "./items/partial-payment";
import Passengers from "./items/passengers";
import Profile from "./items/profile";
import Settings from "./items/settings";
import Support from "./items/support";
import Link from "next/link";

const SidebarExpand = ({ className }: any) => {
  return (
    <Sidebar
      className={cn(
        "shadow-none border-none rounded-none tb-sidebar",
        className
      )}
    >
      <SidebarBody>
        <SidebarList className="space-y-0.5">
          <SidebarItem>
            <MagnifyingGlass size={25} />
            <Link href="/search">
              <span>Search</span>
            </Link>
          </SidebarItem>

          <SidebarItem>
            <Share size={25} />
            <Link href="/share-pnr">
              <span>Share PNR</span>
            </Link>
          </SidebarItem>

          <BookingHistory />

          <Passengers />

          <SidebarItem>
            <CreditCard size={25} />
            <Link href="/payment/submit-payment-request">
              <span> Payment</span>
            </Link>
          </SidebarItem>

          <PartialPayment />
          <SidebarItem>
            <ClockCounterClockwise size={25} />
            <Link href="/search">
              <span>Transaction history</span>
            </Link>
          </SidebarItem>

          <Profile />

          <Settings />

          <Support />
        </SidebarList>
      </SidebarBody>
    </Sidebar>
  );
};

export default SidebarExpand;
