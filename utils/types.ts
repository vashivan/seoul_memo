export type Box = {
  id: number;
  video: string,
  name: string;
  slug: string;
  boxPrice: number;
  description?: string;
  story: scene[];
  items: Item[];
};

export type Item = {
  id: number;
  name: string;
  description?: string;
  variants: options[];
  link: string;
  imageUrl: string;
  imageAlt: string;
};

export type options = {
  name: string;
  description: string;
}
export type option = {
  name: string;
}

export type scene = {
  title?: string;
  kicker?: string;
  lines: string[];
};
