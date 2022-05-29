import { Request, Response } from "express";
import { CreateSpecifitacionUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecifitacionUseCase: CreateSpecifitacionUseCase) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createSpecifitacionUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
