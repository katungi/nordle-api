import {words} from './words.ts'

Deno.serve(async (req: Request) => {
  if(req.method === 'GET') {
    return new Response(JSON.stringify(words), {status: 200});
  }

  return new Response("Method not allowed", {status: 405});
})