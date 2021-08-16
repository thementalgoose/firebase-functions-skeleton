# Firebase Functions Typescript Skeleton project

## In the beginning...

Make sure you are logged in to firebase 

```bash
npm i -g firebase-tools
firebase login
firebase use <your_project>
```

## Firestore rules

By default firestore.rules file allows reading but not writing. Please update this if you wish to write data! See the [documentation](https://firebase.google.com/docs/firestore/security/get-started) for more information

## To run / deploy

```bash
cd functions/
npm install
npm run build

# To deploy the firestore rules only
npm run deploy:firestore

# To deploy the firebase functions only 
npm run deploy:functions

# To deploy everything
npm run deploy
```

## More info the project

#### Structure

- Functions are written in Typescript under functions/src
- Any file named `<filename>.functions.ts` anywhere inside the project folder when running build / deploy will be scanned and added to the export. Only export functions as in the sample in files that end in `.functions.ts`

```
+- src/
    +- index.ts 
    +- lib/
        +- admin.ts 
    +- any_folder/
        +- <custom>.function.ts
```

- `index.ts` - **Do not modify** - Pulls in all files that end in `.functions.js` into the index for export (after compile)
- `admin.ts` - **Do not modify** - Will setup the Admin SDK, add this at the top of every functions file just to be safe 
- `x.functions.ts` - Typescript file handling functions

#### Commands

- `npm run build` will generate the `functions/dist` folder with the compiled Javascript source in. 
- `firebase deploy --only functions` will then push the dist folder to your selected project