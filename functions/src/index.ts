import * as functions from 'firebase-functions';
import * as db from './lib/admin';
import * as fs from 'fs';
import * as path from 'path';

/*
 * Copied from https://github.com/firebase/functions-samples/issues/170
 * Should import all files which end in `.function.js` and make it an export of the class
 */

// Folder where all your individual Cloud Functions files are located.
const FUNCTIONS_FOLDER = './modules';

fs.readdirSync(path.resolve(__dirname, FUNCTIONS_FOLDER))
  .forEach(file => { // list files in the folder.
    if ((file.endsWith('.functions.js')) && (file !== 'index.js') && (file !== 'admin.js')) {
      const fileBaseName = file.slice(0, -3); // Remove the '.js' extension
      const exportedModule = require(`${FUNCTIONS_FOLDER}/${fileBaseName}`);
      for(var functionName in exportedModule) {
        if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === functionName) {
          exports[functionName] = exportedModule[functionName];
        }
      }
    }
  });