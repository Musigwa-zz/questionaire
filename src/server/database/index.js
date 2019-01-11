// write down some database configurations here
const user = {
  id: 1,
  firstname: 'gloria',
  lastname: 'atete',
  othername: 'diane',
  email: 'murediana@gmail.com',
  phonenumber: '0782798310',
  username: 'murediane',
  registered: new Date(),
  isadmin: true,
};
const meetups = [
  {
    id: 1,
    createdOn: new Date('9-1-2019'),
    location: 'kigali',
    image: '',
    topic: 'introduction to javascript',
    happeningOn: new Date('Thu Jan 9 2018 15:30 GMT'),
    tags: 'javascript',
  },
];

const question = {
  id: 1,
  createdOn: new Date(),
  createdBy: 1,
  meetup: 1,
  title: '',
  body: '',
  votes: 1,
};
export { user, meetups, question };
