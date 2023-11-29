<<<<<<< HEAD
#!/usr/bin/npm dev
import { createClient } from 'redis';

const client = createClient();
const EXIT_MSG = 'KILL_SERVER';

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.subscribe('holberton school channel');

client.on('message', (_err, msg) => {
  console.log(msg);
  if (msg === EXIT_MSG) {
    client.unsubscribe();
    client.quit();
=======
import redis from "redis";

const client = redis.createClient();

client
  .on("error", (error) => {
    if (error) console.log(`Redis client not connected to the server: ${err}`);
  })
  .on("ready", () => {
    console.log("Redis client connected to the server");
  });

client.subscribe("holberton school channel");

client.on("message", (channel, message) => {
  console.log(message);
  if (message === "KILL_SERVER") {
    client.unsubscribe(channel);
    process.exit(0);
>>>>>>> e47e4a8a69e41f7a5f686386b807f564095be9f4
  }
});
