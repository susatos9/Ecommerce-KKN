import { Elysia } from 'elysia';
import initialize from '#backend/modules/shared/initializer.ts';

const { db, auth } = initialize();

const app = new Elysia().get('/', () => 'Hello Elysia').listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
