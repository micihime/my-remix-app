# Welcome to Remix + Vite!

My first Remix app with Drizzle, for learning purposes.

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

### Resources used
[Remix + Drizzle + SQLite example](https://www.jacobparis.com/content/remix-drizzle-sqlite)
[Drizzle + SQLite docs](https://orm.drizzle.team/docs/sql-schema-declaration)
[Schema inpriration](https://medium.com/@lukepierotti/running-a-bar-how-to-model-many-to-many-relationships-in-sqlite3-8a574e5fdd26)
[Form validation - ](https://remix.run/docs/en/main/guides/form-validation#step-1-setting-up-the-signup-form)

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
