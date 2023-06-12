export type ItemsBreadcrumb = {
  text: string;
  redirectLink?: string;
};

export interface BreadcrumbsProps {
  items: ItemsBreadcrumb[];
  separator?: string;
}
