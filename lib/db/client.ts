import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Tradeoff Note: We use Neon's HTTP driver (@neondatabase/serverless neon()) for zero-latency,
// connectionless edge & serverless requests without TCP connection pool overhead.
const databaseUrl = process.env.DATABASE_URL || 'https://placeholder.neon.tech';

const sql = neon(databaseUrl);
export const db = drizzle(sql, { schema });
