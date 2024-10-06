"use client";
import {
  Badge,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import { nanoid } from "nanoid";
import { DotsThreeOutlineVertical, Funnel, Plus } from "phosphor-react";
interface PropsTypes {
  tableTitle: string;
  headerItems: string[];
  data: any;
}
export const KeepTable: React.FC<PropsTypes> = ({
  tableTitle,
  headerItems,
  data,
}) => {
  return (
    <>
      <div className="flex items-center gap-2 px-1 py-5">
        <h2 className="text-heading-6 font-semibold text-secondary-main dark:text-white">
          {tableTitle}
        </h2>

        <Badge className="dark:bg-secondary-main dark:text-white">
          {data.length}
        </Badge>

        <Button variant="outline" className=" ml-auto">
          <Plus className="size-4 fill-secondary-main dark:fill-white mr-2" />
          Add Data
        </Button>

        <Button variant="outline">
          <Funnel className="size-4 fill-secondary-main dark:fill-white mr-2" />
          Filter Data
        </Button>
      </div>

      <Table className="table-auto rounded-none">
        <TableHeader>
          <TableRow>
            {headerItems.map((item: string) => (
              <TableHead key={nanoid()}>
                <div className="w-[110px]">{item}</div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item: any) => (
            <TableRow key={nanoid()}>
              {Object.keys(item).map((key) => (
                <TableCell key={key}>{item[key]}</TableCell>
              ))}
              <TableCell>
                <Dropdown>
                  <DropdownAction asChild>
                    <button>
                      <DotsThreeOutlineVertical className="size-4 fill-secondary-main dark:fill-white" />
                    </button>
                  </DropdownAction>
                  <DropdownContent className="max-w-[200px] border border-metal-100 p-3">
                    <DropdownList>
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem>Move</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownList>
                  </DropdownContent>
                </Dropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
