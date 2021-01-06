# Firebase Functions Typescript Skeleton project

## Initially

Make sure you are logged in to firebase 

```
npm i -g firebase-tools
firebase login
firebase use <your_project>
```

## To setup

```
cd functions/
npm install 
npm run build
npm run deploy

// To deploy the firestore rules
firebase deploy --only firestore:rules

// To deploy the firebase functions
firebase deploy --only functions
```

## About the project

- Functions are written in Typescript under functions/src
    - src/
        - `index.ts` - **Do not modify** - Pulls in all files that end in `.functions.js` into the index for export (after compile)
        - lib/ 
            - `admin.ts` - **Do not modify** - Will setup the Admin SDK 
        - any_folder/
            - `sample.functions.ts` - Typescript file handling functions
            - etc....

- `npm run build` will generate the `functions/dist` folder with the compiled Javascript source in. 
- `firebase deploy --only functions` will then push the dist folder to your selected project

## To add more functions

- Make a file named `<filename>.functions.ts` anywhere inside the project folder. When running build / deploy, the index file will scan for all files that end in `.functions.ts` and include them in the exports for firebase
