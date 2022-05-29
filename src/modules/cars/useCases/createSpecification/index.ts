import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecifitacionUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationRepository = SpecificationsRepository.getInstance();
const createSpecifitacionUseCase = new CreateSpecifitacionUseCase(
  specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecifitacionUseCase
);

export { createSpecificationController };
