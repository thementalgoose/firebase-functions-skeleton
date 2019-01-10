import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

// Wrapped in Try to stop it being initialised more than once 
try { 
    admin.initializeApp(functions.config()); 
} catch (e) { }

const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };

// Wrapped in Try to stop it being initialised more than once
try { 
    firestore.settings(settings); 
} catch (e) { }

export default firestore;

