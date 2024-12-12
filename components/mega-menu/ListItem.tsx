import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface ListItemProps {
  title: string;
  description?: string;
  image?: string;
  isActive: boolean;
  onMouseEnter: () => void;
}

const ListItem: FC<ListItemProps> = function ListItem({
  title,
  description,
  image,
  isActive,
  onMouseEnter,
}) {
  return (
    <li className="relative" onMouseEnter={onMouseEnter}>
      <Link
        href="#"
        className={cn(
          "block px-2 py-4 select-none rounded-md leading-none no-underline outline-none transition-colors",
          "hover:bg-white hover:text-accent-foreground",
          isActive && "bg-white text-accent-foreground"
        )}
      >
        <div className="flex gap-2">
          {image && (
            <img
              className="w-20 h-20 p-1 bg-white shadow-md rounded-md"
              src={image}
              alt={title}
            />
          )}
          <div>
            <span className="text-md font-semibold leading-none">{title}</span>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
