# ConJob
🐐🦄🐫🦅🦢🌲🍇🍄🏔️	🏰⛩️🌈🏆🎯
🚚🚧🛑🚦🛢️	🚊🛴✈️🚀☀️🌛⚡🔥🌊

### What We've Done
⚡ Export Data from a ```<table></table>``` to CSV format [https://www.geeksforgeeks.org/how-to-export-html-table-to-csv-using-javascript/]

🦄 Preform CRUD operations with Prisma Query Builder using a SQLite3 Database
    - How To Prisma with SQLite3 [https://www.freecodecamp.org/news/build-nodejs-database-using-prisma-orm/]
    - How To Seed DB [https://www.prisma.io/docs/guides/database/seed-database]
    - MIGRATIONS to generate our DB Structure from our Prisma Schema 
      ```npx prisma migrate dev --name mydb```
    - SEEDS to populate our DB with data (we added this script to our package JSON to automatically run after a migration)
      ```npx prisma db seed```
        or manually run each file by itself in the CLI
      ```node prisma/seeds/clean.js```

### Still To Do
- Auth with Next.js 12 middleware
- Import CSV and Save to DB
- Deploy on Vercel

### Helpful Links
- Logging and object [https://levelup.gitconnected.com/5-ways-to-log-an-object-to-the-console-in-javascript-7b995c56af5a]

