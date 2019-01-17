import Router from 'express';
import { createMeetups, getMeetup, getAllMeetups } from '../controllers/meetups';
const router = Router();
const entry = '/meetups';
// create Meetups route

router.post(`${entry}`, createMeetups);
//get ameetup with aspecific Id
router.get(`${entry}/:id`, getMeetup);
router.get(`${entry}`, getAllMeetups);
export default router;
