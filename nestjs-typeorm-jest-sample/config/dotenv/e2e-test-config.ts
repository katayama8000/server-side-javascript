import * as dotenv from 'dotenv';
import * as path from 'path';

const testEnv = dotenv.config({
  path: path.join(process.cwd(), '.env.testing'),
});

// 明示的に環境変数を上書き
Object.assign(process.env, {
  ...testEnv.parsed,
});
