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

Fallback:
fallback -> false :
when the pages are limited(for exp 10 pages)

fallback -> true :
even when the pages are limited, user can still request more than the limit and it will still build the pages, even tho they were not built on the build.
next wills start building the page when a user request it for the first time,this way the unused and unrequested pages will never be built

fallback -> blocking :
it creates the html straightly and skips sending json(like fallback true). it could be better for ux and seo to use

### 2-ssr:

server side rendering

## an important point about next:

next will fetch the pages connected to Link tags when user hovers on them
