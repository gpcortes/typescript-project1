import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

import { Specification } from "../../model/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
  private specification: Specification[];

  private static INSTACE: SpecificationsRepository;

  private constructor() {
    this.specification = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTACE) {
      SpecificationsRepository.INSTACE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTACE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      create_at: new Date(),
    });

    this.specification.push(specification);
  }

  list(): Specification[] {
    return this.specification;
  }

  findByName(name: string): Specification {
    const specification = this.specification.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecificationsRepository };
