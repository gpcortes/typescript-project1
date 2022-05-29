import { Category } from "../../model/Category";
import { ICategoriesrepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private readonly categoriesRepository: ICategoriesrepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
