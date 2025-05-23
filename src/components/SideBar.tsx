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
import { useCategories } from "@/hooks/customHooks";

const SideBar = ({ setSelectedCategory }) => {
  const { categories } = useCategories();

  return (
    <Sidebar className="static">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 text-xl">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="hover:text-amber-400">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedCategory("All");
                    }}
                  >
                    <Diamond size={16} />
                    <span>All cards</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              <Collapsible className="group/collapsible">
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
                      {categories.map((category) => (
                        <SidebarMenuSubItem
                          key={category.id}
                          className="hover:text-amber-400"
                        >
                          <button
                            className="cursor-pointer"
                            onClick={() => {
                              setSelectedCategory(category.categoryName);
                            }}
                          >
                            <span>{category.categoryName}</span>
                          </button>
                        </SidebarMenuSubItem>
                      ))}
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
