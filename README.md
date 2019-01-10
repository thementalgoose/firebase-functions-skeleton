# Firebase Functions Typescript Skeleton project

## To setup

```
cd functions/
npm install 
npm run deploy

// To deploy the firestore rules
firebase deploy --only firestore:rules

// To deploy the firebase functions
firebase deploy --only functions
```

## About the project

- Functions are written in Typescript under functions/src
    - src/
        - `index.ts` - **Do not modify** - Pulls in all files that end in `.functions.js` into the index for export
        - lib/ 
            - `admin.ts` - Will setup the Admin SDK 
        - modules/
            - `sample.functions.ts` - Typescript file handling functions
            - etc....

- `npm run build` will generate the `functions/dist` folder with the compiled Javascript source in. 

## To add more functions

- Either add to a folder or just create a `X.functions.ts` file inside `/functions/src/modules/` folder. When running build / deploy, it will build out and include it in the deployment 
