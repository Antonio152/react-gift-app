export type GiftContent = {
    id: string;
    title: string;
    url: string;
};
export type CategoryGridProps = {
    category: string;
    limitGifts:string;
};
export type GiftContentApi = {
    id: string;
    title: string;
    images: {
      downsized_medium: {
        url: string
      }
    };
};
export type CategoryProps ={
  addCategory: (category:string,limit:string) => void
}