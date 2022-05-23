import { Router } from 'express';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';


const categoriesRoutes = Router();
const CategoriesRepository1 = new CategoriesRepository()

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = CategoriesRepository1.findByName(name);

    if (categoryAlreadyExists) {
        return response.status(400).json({error: "Category Already Exists"})
    }

    CategoriesRepository1.create({name, description});

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = CategoriesRepository1.list();

    return response.json(all);
});

export { categoriesRoutes };

