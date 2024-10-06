import { Switch, TabContent, TabItem, TabList, Tabs } from "keep-react";
import { nanoid } from "nanoid";
import { SelectEconomy } from "../selects/SelectEconomy";
import { SelectTravellers } from "../selects/SelectTravellers";
import MultiCity from "./multi-city/MultiCity";
import OneWay from "./one-way/OneWay";
import RoundTrip from "./round-trip/RoundTrip";
import Umrah from "./Umrah/Umrah";
const tabs = ["one way", "round trip", "multi city", "umrah"];

const Flight = () => {
  return (
    <Tabs variant="default" defaultActive="one-way" className="mx-auto w-full">
      <TabList>
        {tabs.map((tab) => (
          <TabItem
            key={nanoid()}
            value={tab.toLowerCase().split(" ").join("-")}
            className="capitalize"
          >
            {tab}
          </TabItem>
        ))}
        <SelectTravellers />
        <SelectEconomy />
        <div className="flex ml-64 gap-2">
          <Switch
            variant="default"
            className="bg-secondary-300 text-black border"
          />
          <p className="font-normal">Direct Flights Only</p>
        </div>
      </TabList>

      <TabContent value="one-way">
        <OneWay />
      </TabContent>

      <TabContent value="round-trip">
        <RoundTrip />
      </TabContent>

      <TabContent value="multi-city">
        <MultiCity />
      </TabContent>

      <TabContent value="umrah">
        <Umrah />
      </TabContent>
    </Tabs>
  );
};

export default Flight;
