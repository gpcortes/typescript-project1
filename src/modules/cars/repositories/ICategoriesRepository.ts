import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesrepository {
  findByName(name: string): Category;
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
}

export { ICreateCategoryDTO, ICategoriesrepository };
