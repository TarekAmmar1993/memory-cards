import React from "react";
import { GalleryVerticalEnd, Diamond, ChevronDown } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "./ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";

const SideBar = () => {
  return (
    <Sidebar className="static">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 text-xl">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="hover:text-amber-400">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Diamond size={16} />
                    <span>All cards</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger className="flex w-full cursor-pointer gap-2 p-2 hover:text-amber-400">
                    <GalleryVerticalEnd size={16} />
                    <span>Categories</span>
                    <ChevronDown
                      className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"
                      size={16}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem className="hover:text-amber-400">
                        <a
                          onClick={() => {
                            console.log("react");
                          }}
                          href="#"
                        >
                          <span>React</span>
                        </a>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem className="hover:text-amber-400">
                        <a
                          href="#"
                          onClick={() => {
                            console.log("vue");
                          }}
                        >
                          <span>Vue</span>
                        </a>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem className="hover:text-amber-400">
                        <a
                          href="#"
                          onClick={() => {
                            console.log("angular");
                          }}
                        >
                          <span>Angular</span>
                        </a>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBar;
