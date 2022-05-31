import "dotenv";
import { Application } from "oak";
import { sleepRandomAmountOfSeconds } from "sleep";
import { faker } from "faker";

// const API_KEY = Deno.env.get("API_KEY");

const app = new Application();
const port = 8000;
const hostname = "0.0.0.0";

app.use(async (ctx) => {
  await sleepRandomAmountOfSeconds(0, 1);
  const users = Array(20)
    .fill(null)
    .map(() => ({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    }));

  ctx.response.body = users;
});

app.addEventListener("listen", () => {
  console.log(`Listening on ${hostname}:${port}`);
});

await app.listen({ port, hostname });
