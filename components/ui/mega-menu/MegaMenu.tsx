"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import data from "@/mock/menu.json";
import MenuContent from "./MenuContent";
import { Section } from "@/types";


const MegaMenu = () => {
  const [activeSection, setActiveSection] = useState<Section>(data.menuItems[0].children[0]);

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-6">
        {data.menuItems.map((menuItem) => (
          <NavigationMenuItem key={menuItem.title}>
            <NavigationMenuTrigger className="text-base">
              {menuItem.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <MenuContent
                items={menuItem.children}
                title={menuItem.title}
                description={menuItem.description}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            </NavigationMenuContent>  
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};


export default MegaMenu;
