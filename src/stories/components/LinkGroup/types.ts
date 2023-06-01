export interface LinkItem {
  id: string;
  label: string;
  redirectLink: string;
}

export interface LinkGroupsProps {
  title: string;
  links: LinkItem[];
}
