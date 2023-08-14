import express, { type Request, type Response } from 'express';
import { APP_VERSION } from '../../config';
import { monitorInstance } from '../../services/monitor';
import { botInstance } from '../../services/bot';

const router = express.Router();

router.get('/', async (_: Request, res: Response) => {
  const bot = await botInstance.bot.getMe();
  res.render('index', {
    bot,
    appVersion: APP_VERSION,
  }); // Render the 'index.ejs' template
});

router.get('/check', async (_: Request, res: Response) => {
  const report = await monitorInstance.checkAll(); // run checker
  res.status(200).json({ report }); // response report
});

export default router;
