## Manual installation
 - Initialize package.json (npm init -y)
    - Change type:"commojs" to "module
 - Insall typescript (add RootDir, OutDir)
 - npm install prisma@6.19.2 @prisma/client@6.19.2 express @types/express
 - create a model in schema.prisma
 - create index.ts and write some express code and interact with { PrismaClient }
 - npx prisma migrate dev
 - npx prisma generate
 - npm run build  (dist file created)
 - npm run start


## Docker Installation
 - create network so postgres and server can communicate
    - docker network create user-network
 - Start postgres
    - docker run --network user-network --name postgres-db -e POSTGRES_PASSWORD=2026 -d -p 5432:5432 postgres
 - Build the Image
    - docker build --network=host -t user-project-app .
 - Start Image or Start Server with connection of your DB dont hit localhost, hit name of DB
    - docker run --network user-network -e DATABASE_URL=postgresql://postgres:2026@postgres-db:5432/postgres -p 3000:3000 user-project-app


## Docker-Compose Installation
 - Install Docker, docker-compose
 - Run `docker-compose up`
   