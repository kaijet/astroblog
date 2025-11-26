import { Hono } from 'hono';
import type { APIRoute } from 'astro';

const app = new Hono()
    .basePath('/api/')
    .get('/one', (c) => {
        return c.json({
            post:[
                {id:1, title:'文章一', content:'这是文章一的内容'},
                {id:2, title:'文章二', content:'这是文章二的内容'},
                {id:3, title:'文章三', content:'这是文章三的内容'},

            ],
        });
    });
export const ALL: APIRoute = (context)=>app.fetch(context.request);