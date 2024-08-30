# Post Saver for Backend Test from DOT Indonesia

## Installation

```bash
$ npm install
```

## ENV EXAMPLE

Buat ENV dengan keys sebagai berikut. Gunakan PostgreSQL sebagai driver database

```bash
DB_TYPE="postgres"
DB_HOST="localhost"
DB_PORT=5432
DB_USERNAME="postgres"
DB_PASSWORD=123
DB_NAME="your_db_name"
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Documentation (Swagger)

Buka endpoint dibawah setelah development server berjalan untuk mendapatkan dokumentasi API dan contoh request body.

http://localhost:3000/api
