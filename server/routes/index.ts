import express, { type Request, type Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.render('index'); // Render the 'index.ejs' template
});

export default router;
