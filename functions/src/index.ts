import * as functions from 'firebase-functions';
var glob = require("glob");

/*
 * Copied from https://github.com/firebase/functions-samples/issues/170
 * Should import all files which end in `.function.js` and make it an export of the class
 */
glob("!(node_modules)/**/*.functions.js", {}, (err: Error, files: string[]) =>  { 
  console.log("Files found: " + files);
  files.forEach(file => { 
      if (file.startsWith("dist/")) { 
        file = file.replace("dist/", "");
      }
      const fileBasePath = file.slice(0, -3);
      const exportedModule = require(`./${fileBasePath}`);
      for (let name in exportedModule) { 
        if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === name) { 
          exports[name] = exportedModule[name];
        }
      }
  });
  console.log(exports);
})