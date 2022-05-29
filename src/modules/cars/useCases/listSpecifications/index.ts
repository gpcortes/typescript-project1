import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { ListSpecificationsController } from "./ListSpecificationsController";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(
  specificationsRepository
);
const listSpecificationsController = new ListSpecificationsController(
  listSpecificationUseCase
);

export { listSpecificationsController };
