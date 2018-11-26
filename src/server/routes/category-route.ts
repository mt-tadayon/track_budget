import { Category } from './../model/category';
import * as hapi from 'hapi';
import { ICategory } from '../interfaces/category';

export const categoryRoute = [{
    method: 'GET',
    path: '/',
    handler: function () { // request: hapi.Request, h: hapi.ResponseToolkit
        return "<h1>My modern API is up and running!</h1>";
    }
},
{
    method: 'GET',
    path: '/api/v1/categories',
    handler: () => {
        console.log("Get all categories");
        return Category.find();
    }
}, {
    method: 'POST',
    path: '/api/v1/categories',
    handler: (request: hapi.Request) => {
        const { name } = request.payload as ICategory;
        const category = new Category({
            name
        });
        return category.save();
    }
}]