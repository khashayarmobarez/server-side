// boto start course document

# server side rendering

## bonus topic

### json-server

how to make:
1- npm i json-server
2- add "serve-json": "json-server --watch db.json --port 3060" to you package.json
3- make db.json files with your data base file

how to run:
1- npm run serve-json
2- use the adress written obove you page of server for exp: http://localhost:3060/posts

## data fetching:

data fetching can be done in serverside in nextjs,

## two models of pre rendering:

### 1-ssg:

static side generation(ssg)
the page is generated at build time

getStaticProps:
you should use `getStaticProps` component IN THE PAGE that you want to use the fetched date
example at pages/index.js

getStaticPaths:
the `getStaticPaths` is used for setting the quantity of pages that needs to render in build for ssg pages, for exp when the path has and id

### 2-ssr:

server side rendering
