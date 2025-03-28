const express = require('express');
const router = express.Router();
const {AdminController} = require('../app/controller/index');

// Routes cho danh mục
router.get('/categories/:id', AdminController.editCategoryModal);
router.put('/categories/:id/edit', AdminController.updateCategoryModal);
router.post('/categories/:id/edit', AdminController.updateCategoryModal);
router.post('/categories/create', AdminController.createCategoryModal);

// Routes cho sản phẩm
router.post('/products/create', AdminController.createProductModal);
router.get('/products/create', AdminController.createProductModal);
router.post('/products/:id/edit', AdminController.updateProductModal);
router.put('/products/:id/edit', AdminController.updateProductModal);
router.get('/products/:id/edit', AdminController.editProductModal);


// Routes cho người dùng
router.get('/users/:id', AdminController.editUserModal);
router.put('/users/:id/edit', AdminController.updateUserModal);
router.post('/users/:id/edit', AdminController.updateUserModal);
router.post('/users/:id', AdminController.deleteUser);
router.delete('/users/:id', AdminController.deleteUser);

// Routes xác thực
router.post('/logout', AdminController.logout);
router.post('/login', AdminController.login);
router.get('/login', AdminController.login);
router.get('/', AdminController.index);

module.exports = router;
