import Router from 'express';
import { createMeetups } from '../controllers/meetups';
const router = Router();
const entry = '/meetups';
// create Meetups route

router.post(`${entry}`, createMeetups);
export default router;
