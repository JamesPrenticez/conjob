# ConJob
ððĶðŦðĶðĶĒðēðððïļ	ð°âĐïļðððŊ
ðð§ððĶðĒïļ	ððīâïļðâïļðâĄðĨð

### What We've Done
âĄ Export Data from a ```<table></table>``` to CSV format [https://www.geeksforgeeks.org/how-to-export-html-table-to-csv-using-javascript/]

ðĶ Preform CRUD operations with Prisma Query Builder using a SQLite3 Database
    - How To Prisma with SQLite3 [https://www.freecodecamp.org/news/build-nodejs-database-using-prisma-orm/]
    - How To Seed DB [https://www.prisma.io/docs/guides/database/seed-database]
    - MIGRATIONS to generate our DB Structure from our Prisma Schema 
      ```npx prisma migrate dev --name mydb```
    - SEEDS to populate our DB with data (we added this script to our package JSON to automatically run after a migration)
      ```npx prisma db seed```
        or manually run each file by itself in the CLI
      ```node prisma/seeds/clean.js```

### Still To Do
- Import CSV and Save to DB
- Auth with Next.js 12 middleware
- Deploy on Vercel

### Helpful Links
- Logging and object [https://levelup.gitconnected.com/5-ways-to-log-an-object-to-the-console-in-javascript-7b995c56af5a]
- Today we learnt that you cannot use 'getServerSideProps in non-page compentents. You need to pass props
- We also realise tailwind height and widths are multiples of 8 16 32 64
- 