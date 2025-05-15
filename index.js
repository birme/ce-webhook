const fastify = require('fastify');
const { randomUUID } = require('node:crypto');

const app = fastify();
app.get('/nextVod', (request, reply) => {
  const channelId = request.query.channelId;
  console.log(`Requesting next VOD for channel ${channelId}`);

  const vods = [
    'https://lab.cdn.eyevinn.technology/stswetvplus-promo-2023-5GBm231Mkz.mov/manifest.m3u8',
    'https://lab.cdn.eyevinn.technology/Channel-Engine-Promo-Mar-2023-PnA8E-jw5x.mp4/manifest.m3u8',
    'https://lab.cdn.eyevinn.technology/eyevinn-reel-feb-2023-_2Y7i4eOAi.mp4/manifest.m3u8'
  ];
  const vodResponse = {
    id: randomUUID(),
    title: 'Example',
    hlsUrl: vods[Math.floor(Math.random() * vods.length)],
    prerollUrl: 'https://maitv-vod.lab.eyevinn.technology/VINN.mp4/master.m3u8',
    prerollDurationMs: 105000
  };
  reply.send(vodResponse);
});

app.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
  if (err) console.error(err);
  console.log(`Server listening at ${address}`);
});
