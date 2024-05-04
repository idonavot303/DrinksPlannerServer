import { PrismaClient } from '@prisma/client';
import express, { Express, Request, Response } from 'express';

const prisma = new PrismaClient();
const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  try {
    const eventsResult = await getEvents();
    res.send('Listed Events: ' + JSON.stringify(eventsResult));
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Error fetching events');
  }
});

const getEvents = async () => {
  const events = await prisma.event.findMany();
  return events;
};

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
