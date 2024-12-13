export type SubItem = {
  title: string;
  href: string;
  description?: string;
}

export type Section = {
  title: string;
  href?: string;
  image?: string;
  description?: string;
  children?: SubItem[];
}
  
export type MenuContentProps = {
    items: Section[];
    title?: string;
    description?: string;
    activeSection: Section;
    setActiveSection: (section: Section) => void;
  };