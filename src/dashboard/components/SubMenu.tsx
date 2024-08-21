import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/shadcn/ui/menubar";
import { Link } from "react-router-dom";

export const SubMenu = () => {
  return (
      <Menubar className="mx-auto mt-2">
        <MenubarMenu>
          <MenubarTrigger>Option 1</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link className="w-full h-full" to="/dashboard/chart">Chart</Link>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Option 2</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Settings</MenubarItem>
            <MenubarItem>Exit</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Option 3</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Settings 2</MenubarItem>
            <MenubarItem>Exit 2</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
  );
};
