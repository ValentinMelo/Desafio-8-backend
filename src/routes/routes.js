import express from 'express';
import ProductRoutes from './productRoutes.js';
import CartRoutes from './cartRoutes.js';
import TicketRoutes from './ticketRoutes.js';

const router = express.Router();

router.use(express.json());
router.use('/products', ProductRoutes);
router.use('/carts', CartRoutes);
router.use('/tickets', TicketRoutes);

// Endpoint para el Mocking de productos
router.get('/mockingproducts', (req, res) => {
  const mockedProducts = [];
  for (let i = 0; i < 100; i++) {
    mockedProducts.push({
      title: `Product ${i}`,
      description: `Description ${i}`,
      code: `Code ${i}`,
      price: i * 10,
      status: true,
      stock: i * 100,
      category: `Category ${i}`,
      thumbnail: `Thumbnail ${i}`
    });
  }
  res.json(mockedProducts);
});

export default router;
