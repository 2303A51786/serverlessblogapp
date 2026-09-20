import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Tradeoff Note: We use Neon's HTTP driver (@neondatabase/serverless neon()) for zero-latency,
// connectionless edge & serverless requests without TCP connection pool overhead.
const databaseUrl =
  process.env.DATABASE_URL ||
  'postgresql://placeholder:placeholder@ep-placeholder-123456.us-east-1.aws.neon.tech/neondb?sslmode=require';

const sql = neon(databaseUrl);
export const db = drizzle(sql, { schema });
