import { ICategory } from './../interfaces/category';
import * as hapi from 'hapi';

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
    }
}, {
    method: 'POST',
    path: '/api/v1/categories',
    handler: (request: hapi.Request) => {
        const { name } = request.payload as ICategory;
        console.log(name);
    }
}]