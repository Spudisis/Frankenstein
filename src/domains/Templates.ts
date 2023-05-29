export type TemplateType = {
  id: number;
  name: string;
  type: string;
  miniature?: string;
  privateStatus: boolean;
  tiers: string;
  layout: string;
  createdAt: string;
  updatedAt: String;
  userId: number;
};
export type CreateTemplateType = {
  name: string;
  privateStatus: boolean;
  type: string;
  layout: string;
  miniature?: File[];
};
