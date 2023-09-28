import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/ping", () => "pong")
  .get("/hello", () => "Hello World")
  .get("/calculate", (req) => {
    const num1 = parseInt(req.query.num1, 10) || 0;
    const num2 = parseInt(req.query.num2, 10) || 0;
    const sum = num1 + num2;
    return `The sum of ${num1} and ${num2} is: ${sum}`;
  })
  .listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
