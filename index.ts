import concurrently from 'concurrently';
import { server } from 'typescript';

concurrently([
   {
      name: 'server',
      command: 'bun run dev',
      cwd: 'packages/server',
      prefixColor: 'cyan',
   },
   {
      name: 'client',
      command: 'bun run dev',
      cwd: 'packages/client',
      prefixColor: 'green',
   },
]);
