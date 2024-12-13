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
  const [activeSection, setActiveSection] = useState<Section>(data.menuItems[0]?.children[0]);

  const handleMenuItemHover = (menuItem: typeof data.menuItems[0]) => {
    // Set the first child section as active when hovering over a menu item
    if (menuItem.children && menuItem.children.length > 0) {
      setActiveSection(menuItem.children[0]);
    }
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-6">
        {data.menuItems.map((menuItem) => (
          <NavigationMenuItem key={menuItem.title}>
            <NavigationMenuTrigger 
              className="text-base"
              onMouseEnter={() => handleMenuItemHover(menuItem)}
            >
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
