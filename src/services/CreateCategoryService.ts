import { CategoriesRepository } from "../../repositories/CategoriesRepository";

 interface IRequest {
     name: string;
     description: string;
 }

 /***
  * [X] - Definir o tipo de retorno
  * [X] - Alterar o retorno de erro 
  * [X] - Acessar o repositorio
  */  

class CreateCategoryService {

    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ description, name }: IRequest): void {
    
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error( "Category Already Exists!" );
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService }