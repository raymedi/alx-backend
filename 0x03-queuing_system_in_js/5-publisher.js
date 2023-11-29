<<<<<<< HEAD
#!/usr/bin/npm dev
import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});
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
>>>>>>> e47e4a8a69e41f7a5f686386b807f564095be9f4

const publishMessage = (message, time) => {
  setTimeout(() => {
    console.log(`About to send ${message}`);
<<<<<<< HEAD
    client.publish('holberton school channel', message);
  }, time);
};

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

publishMessage('Holberton Student #1 starts course', 100);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('Holberton Student #3 starts course', 400);
=======
    client.publish("holberton school channel", message);
  }, time);
};
publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
>>>>>>> e47e4a8a69e41f7a5f686386b807f564095be9f4
