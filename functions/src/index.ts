import * as functions from 'firebase-functions';
var glob = require("glob");

/*
 * Copied from https://github.com/firebase/functions-samples/issues/170
 * Should import all files which end in `.function.js` and make it an export of the class
 */
glob("!(node_modules)/**/*.js", {}, (err: Error, files: string[]) =>  { 
  files.forEach(file => { 
    if (file.startsWith("dist/")) { 
      file = file.replace("dist/", "");
    }
    let fileName = file.split("/").filter(item => item.indexOf(".js") !== -1)[0];
    if ((fileName.endsWith('.functions.js') && fileName !== 'index.js' && fileName !== 'admin.js')) { 
      const fileBasePath = file.slice(0, -3);
      const exportedModule = require(`./${fileBasePath}`);
      for (let name in exportedModule) { 
        if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === name) { 
          exports[name] = exportedModule[name];
        }
      }
    }
  });
})