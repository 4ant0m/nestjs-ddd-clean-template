const { execSync } = require('child_process');
require('dotenv').config({ path:  '.env.development.local' });

const schemas = [
    './src/modules/user/infrastructure/prisma/schema.prisma',
    //'./src/modules/role/infrastructure/prisma/schema.prisma',
    // Add more schema paths as needed
];

schemas.forEach(schemaPath => {
    console.log(`Running migration for schema: ${schemaPath}`);
    execSync(`npx prisma generate --schema=${schemaPath}`, { stdio: 'inherit' });
    execSync(`npx prisma migrate dev --name init --schema=${schemaPath}`, { stdio: 'inherit' });
    console.log(`Migration complete for schema: ${schemaPath}`);
});
