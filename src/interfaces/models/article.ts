import ICategory from "./categories";

export default interface IArticle {
  id: number;
  image: string;
  author: string;
  categories: ICategory;
  is_featured: boolean;
  title: string;
  summary: string;
  content: string;
  created_at: string;
}
