import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://lucas4na_ussl_user:dqC4RZr4vK6YDYwbaxyYoMXBmAX7XJds@dpg-cr7qsml6l47c73bq6r00-a.oregon-postgres.render.com/lucas4na_ussl';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;
 