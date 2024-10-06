"use client";
import { TabContent, TabItem, TabList, Tabs } from "keep-react";
import { nanoid } from "nanoid";
import { FaHotel, FaPlane, FaSuitcase } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { RiVisaFill } from "react-icons/ri";
import Flight from "./Flight/Flight";
import GroupRequest from "./GroupRequest/GroupRequest";
import Holiday from "./Holiday/Holiday";
import Hotels from "./Hotels/Hotels";
import Visa from "./Visa/Visa";

type MenuItem = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

const tabs: MenuItem[] = [
  { label: "Flights", value: "flights", icon: <FaPlane /> },
  { label: "Hotels", value: "hotels", icon: <FaHotel /> },
  { label: "Holiday", value: "holiday", icon: <FaSuitcase /> },
  { label: "Visa", value: "visa", icon: <RiVisaFill /> },
  { label: "Group Request", value: "group-request", icon: <FaUserGroup /> },
];

const Search: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center seBanner p-10">
      <Tabs defaultActive="flights" className="mx-auto w-full">
        <TabList className="flex items-center justify-center">
          {tabs.map((tab) => (
            <TabItem value={tab.value} key={nanoid()} className="text-white">
              {tab.icon}
              {tab.label}
            </TabItem>
          ))}
        </TabList>

        <div className="bg-white dark:bg-secondary-main m-5 p-7 rounded-3xl">
          <TabContent value="flights">
            <Flight />
          </TabContent>

          <TabContent value="hotels">
            <Hotels />
          </TabContent>

          <TabContent value="holiday">
            <Holiday />
          </TabContent>

          <TabContent value="visa">
            <Visa />
          </TabContent>

          <TabContent value="group-request">
            <GroupRequest />
          </TabContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Search;
