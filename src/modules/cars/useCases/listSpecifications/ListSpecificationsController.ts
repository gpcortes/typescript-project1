import { Request, Response } from "express";
import { ListSpecificationUseCase } from "../listSpecifications/ListSpecificationUseCase";

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const specification = this.listSpecificationsUseCase.execute();

    return response.json(specification);
  }
}

export { ListSpecificationsController };
