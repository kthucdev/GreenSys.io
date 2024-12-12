import { MenuContentProps } from "@/types";
import ListItem from "./ListItem";
import Link from "next/link";

const MenuContent = ({
  items,
  title,
  description,
  activeSection,
  setActiveSection,
}: MenuContentProps) => {
  return (
    <div className="min-w-[1000px] grid grid-cols-[1fr_1fr_1fr] p-4 gap-2 min-h-[500px] bg-gray-100">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {/* Main menu */}
      <ul>
        {items.map((section) => (
          <ListItem
            key={section.title}
            title={section.title || ""}
            description={section.description || ""}
            isActive={activeSection.title === section.title}
            image={section.image}
            onMouseEnter={() => setActiveSection(section)}
          />
        ))}
      </ul>
      {/* Submenu */}
      <div className="p-1 bg-white rounded-md">
        <ul className="space-y-2">
          {activeSection.children?.map((item) => (
            <li key={item.title} className="border-b border-gray-200">
              <Link
                href={item.href}
                className="block p-3 rounded-md hover:text-blue-600"
              >
                <div className="text-sm font-semibold">{item.title}</div>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuContent;
