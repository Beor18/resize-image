## Upload and Resize image with Nodejs

- npm install
- Crear carpeta "public/uploads"
- npm run dev


#### Rutas

```js
form-data postman: fotoproducto
```

```js
POST /api/resize // upload image
GET /api/resize // all images
GET /api/:id/resize?w=valor // image by id and resize query string
```