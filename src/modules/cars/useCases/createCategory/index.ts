import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryConmtroller } from "./CreateCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryConmtroller(
  createCategoryUseCase
);

export { createCategoryController };
