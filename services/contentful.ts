import * as contentful from 'contentful';

const keys = {
    spaceId: '4xlg4u86jlb1',
    accessToken: 'GdXhu9HIstYsZOjNFgh5-uO8bDpqUvwfzAzSipznYkQ',
};

const client = contentful.createClient({
    accessToken: keys.accessToken,
    space: keys.spaceId,
});

export default client;
