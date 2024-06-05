daftar perintah di terminal
# untuk menginstall nestjs
npm i -g @nestjs/cli --abaikan karena sudah pernah di install

# membuat project
nest new nest-api

# untuk menjalankan nest js
npm run start:dev

# Untuk mendukung fitur partial type, yaitu untuk mengambil beberapa properti dari object tanpa perlu menulis semua properti yang ingin diambil.
npm i @nestjs/mapped-types -D

# Untuk mendukung fitur validation
npm i class-validator class-transformer

# Untuk mendukung fitur prisma dan koneksi database
npm i prisma -D

# gunakan jika tabel belum di buat :
npx prisma init (sudah di pelajari)
- update file .env untuk koneksi database
  - DATABASE_URL="postgresql://postgres:P@ssw0rd@localhost:5432/training?schema=public"
- update file schema.prisma untuk membuat tabel

# jika tabel sudah dibuat :
npx prisma db pull (belum dipelajari, abaikan)

# untuk create tabel
npx prisma migrate dev --name init

# buat folder prisma di dalam folder src
- gunakan format yang sudah ada

# Untuk mendukung fitur config
npm install @nestjs/config

# Untuk mendukung fitur static file
npm install --save @nestjs/serve-static

# tambahkan cors untuk mengaktifkan cors di main.ts
app.enableCors();

# buat module users
nest g module users

# buat controller users
nest g controller users

# buat service users
nest g service users

# update app.module.ts agar seluruh module dapat digunakan
- jalankan kembali service apinya

# untuk membuat contoh awal
ketik ini terlebih dahulu di users.controller.ts :
/*
    GET /users
    GET /users/byQuery?role=admin
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
*/
kemudian jalankan perintah AI
make each function sebagai contoh sementara
# PERHATIKAN HASILNYA BISA SAJA TIDAK SESUAI DENGAN KONDISI YANG MAU DI BUAT

# buat folder dto di dalam folder users
- gunakan format yang sudah ada

# buat folder prisma di dalam folder src
- gunakan format yang sudah ada

# update app.module.ts agar seluruh module dapat digunakan
- gunakan format yang sudah ada

# difile users.service.ts
- tambahkan "constructor(private prisma: PrismaService){}" setelah export
- buat seluruh method yang di perlukan

# perbaiki kembali seluruh fungsi di users.controller.ts
- tambahkan "constructor(private readonly usersService: UsersService) {}" setelah export
- gunakan format yang sudah ada