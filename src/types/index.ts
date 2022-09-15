export type GiftContent = {
    id: string;
    title: string;
    url: string;
};
export type CategoryGridProps = {
    category: string;
    limitGifts:string;
};
export type CategoryProps ={
  addCategory: (value:string) => void,
  addLimit: (value:string) => void
}
export type GiftContentApi = {
    id: string;
    title: string;
    images: {
      downsized_medium: {
        url: string
      }
    };
  };
