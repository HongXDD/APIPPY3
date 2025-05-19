const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const envPath = './.env';

// Check if .env exists
if (!fs.existsSync(envPath)) {
  console.log('.env file not found. Creating one...');

  // Create a new .env file with a random UUID for SECRET_KEY
  const secretKey = uuidv4();
  const content = `SECRET_KEY=${secretKey}\n`;
  fs.writeFileSync(envPath, content, 'utf8');
  console.log('.env file created with a random SECRET_KEY:', secretKey);
} else {
  console.log('.env file already exists. No changes made.');
}
