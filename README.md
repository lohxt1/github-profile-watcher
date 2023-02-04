![made-with-python](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

<h1>
<p align="center">
<img align="center" src="https://lohxt1.github.io/_assets/ticker.svg" alt="github-profile-watcher"/><br/><br/>Github Profile Watcher
</h1>
  <p align="center">
    Github Profile views counter NextJS API
    </p>
</p>

## About The Project

"github-profile-watcher" is a minimal API that provides real-time updates on the number of profile views and presents the data in form of a simple svg badge.

`github.com/lohxt1`

![](https://github-profile-watcher.vercel.app/api/watcher/lohxt1)

## Tech Stack

- [Next.js](https://nextjs.org/) – `framework`
- [Typescript](https://www.typescriptlang.org/) – `language`
- [Upstash Redis]() – `DB store`
- [Vercel](https://vercel.com/) – `hosting`

```javascript
Deploy your own or use the below one

`https://github-profile-watcher.vercel.app/api/watcher/[GITHUB_USERNAME]`
```

## Running the code locally

To run the code locally, open _Terminal_ in your `projects` folder and take the steps:

```bash
# STEP 1: Get sources from GitHub
$ git clone https://github.com/lohxt1/github-profile-watcher.git
$ cd github-profile-watcher

# STEP 2: Install the requirements
$ npm install

# STEP 3:
# Get a REDIS_URL string from Upstash or any other service of your choice
# And update the .env file

# STEP 4: Running the app in dev mode
$ npm run dev
```
