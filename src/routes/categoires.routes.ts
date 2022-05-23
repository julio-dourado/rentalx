import { Router } from 'express';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';


const categoriesRoutes = Router();
const CategoriesRepository1 = new CategoriesRepository()

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    CategoriesRepository1.create({name, description})


    return response.status(201).send();
});

export { categoriesRoutes };

