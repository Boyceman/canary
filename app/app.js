import Koa from 'koa';
import fs from 'fs';
import path from 'path';
import {readfile} from './utils';
import serve from 'koa-static';
import convert from 'koa-convert';

let app = new Koa();

app.use(async (ctx, next)=>{
	try{
		if(ctx.path === '/favicon.ico') return
		await next()
	}catch(err){
		ctx.body = err.message
	  ctx.status = err.status || 500;
	}
})

app.use(convert(serve(path.resolve(__dirname, '../'))))

app.use(async (ctx, next)=>{
  let filePath = path.resolve(__dirname, '../client/index.html')
	let file = await readfile(filePath)
	ctx.body = file.toString()
})

app.listen('3002', ()=>{
	console.log('Listening at localhost:3002')
})
