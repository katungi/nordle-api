import { words } from './words.ts';
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from 'https://deno.land/x/cors/mod.ts';

const app = new Application();
const router = new Router();

app.use(oakCors());

router.get('/', (context) => {
    context.response.body = { words };
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
