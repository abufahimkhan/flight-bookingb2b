import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
import Link from "next/link";
import {
  Airplane,
  ArrowClockwise,
  ArrowUUpLeft,
  CaretDown,
  ClockCounterClockwise,
  CreditCard,
  HourglassMedium,
  MapPin,
  Users,
  X,
} from "phosphor-react";
import React from "react";

const BookingHistory = () => {
  return (
    <SidebarItem dropdown>
      <SidebarDropdown>
        <SidebarCollapse>
          <div className="flex items-center gap-3">
            <ClockCounterClockwise size={25} />
            Booking History
          </div>
          <span className="group-open:-rotate-180">
            <CaretDown size={20} />
          </span>
        </SidebarCollapse>

        <SidebarDropdownList>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <Airplane size={25} />
                  Flight
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem className="justify-start">
                  <Link href="/booking-history/flight/on-hold">
                    <span> On-Hold</span>
                  </Link>
                </SidebarItem>
                <SidebarItem className="justify-start">
                  <Link href="/booking-history/flight/issued">
                    <span>Issued</span>
                  </Link>
                </SidebarItem>
                <SidebarItem className="justify-start">
                  <Link href="/booking-history/flight/canceled-booking">
                    <span>Canceled Booking</span>
                  </Link>
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <X size={25} />
                  Void
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem className="justify-start">
                  <Link href="/booking-history/void/history">
                    <span>History</span>
                  </Link>
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <ArrowUUpLeft size={25} />
                  Refund
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem className="justify-start">
                  <Link href="/booking-history/refund/history">
                    <span>History</span>
                  </Link>
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <ArrowClockwise size={25} />
                  Reissue
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem className="justify-start">
                  <Link href="/booking-history/reissue/history">
                    <span>History</span>
                  </Link>
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem>
            <HourglassMedium size={25} />
            <Link href="/booking-history/hotel">
              <span>Hotel</span>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <CreditCard size={25} />
            <Link href="/booking-history/visa">
              <span>Visa</span>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <MapPin size={25} />
            <Link href="/booking-history/tour-package">
              <span>Tour Package</span>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Users size={25} />
            <Link href="/booking-history/group-tour">
              <span>Group tour</span>
            </Link>
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default BookingHistory;
