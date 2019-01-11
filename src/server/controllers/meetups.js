import Joi from 'joi';
import { meetups } from '../database';

const createMeetups = (req, res) => {
  const schema = {
    topic: Joi.string()
      .min(4)
      .required(),
    location: Joi.string()
      .min(4)
      .required(),
    happeningOn: Joi.string()
      .min(4)
      .required(),
    tags: Joi.string()
      .min(4)
      .required(),
  };
  const result = Joi.validate(req.body, schema);

  if (result.error) {
    res.status(404).send(result.error.details[0].message);
    return;
  }
  const meetup = { id: meetups.length + 1, ...req.body };
  meetups.push(meetup);
  return res.send(meetup);
};
export { createMeetups };
