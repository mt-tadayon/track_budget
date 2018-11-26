export const bookRoutes = [{
    method: 'GET',
    path: '/',
    handler: function () { // request: hapi.Request, h: hapi.ResponseToolkit
        return "Hello!";
    }
}]