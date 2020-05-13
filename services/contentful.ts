import * as contentful from 'contentful';

const keys = {
  spaceId: 'dukrqne1yrbk',
  accessToken: '6lOoYY8pMeFxTAJh47m-TuZe_evfqDREQsVXuMyNC5I',
};

const client = contentful.createClient({
  accessToken: keys.accessToken,
  space: keys.spaceId,
});

export default client;
