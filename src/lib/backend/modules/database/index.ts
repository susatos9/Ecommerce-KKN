import setupDatabase from '#backend/modules/database/initializer/setupDatabase.ts';
// inisialisasi database baru, lalu variabel db bisa dipakai untuk melakukan
// operasi yang memerlukan pemanggilan driver SQLite

const database = () => setupDatabase();

export default database;
