import * as contentful from 'contentful';

const keys = {
    spaceId: 'zi28tmdaujrt',
    accessToken: '-pNEGGK_U-Rt4FRiZn7rmSNWadtnTHVuj0s2VBE4Yks',
};

const client = contentful.createClient({
    accessToken: keys.accessToken,
    space: keys.spaceId,
});

export default client;
