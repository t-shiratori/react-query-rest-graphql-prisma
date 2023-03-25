TanStack Query, Rest, GraphQL, Apollo Server, Prisma

## Set Prisma database url

`prisma/schema.prisma`

```ts
...
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL") // need your database url
}
...
```

## Initialize Prisma

```
yarn prisma-gen
```

## Start prisma-studio

```
yarn prisma-studio
```

`http://localhost:5555/`

<img width="700" alt="スクリーンショット 2023-03-21 22 20 51" src="https://user-images.githubusercontent.com/8470739/227696297-c958ddc8-09ae-4973-940d-a53389928e8a.png">

## Start App

```
yarn dev
```

<img width="700" alt="スクリーンショット 2023-03-25 13 42 42" src="https://user-images.githubusercontent.com/8470739/227696569-f905a52c-67ed-434a-9a40-81b126e7ad2c.png">¥

## Apollo Explorer

`http://localhost:3000/api/graphql`

<img width="700" alt="スクリーンショット 2023-03-21 23 05 53" src="https://user-images.githubusercontent.com/8470739/227696310-196cdd3a-39b7-4412-a039-7ea2bc9bed21.png">
