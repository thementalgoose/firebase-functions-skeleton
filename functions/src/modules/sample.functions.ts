import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import firestore from '../lib/admin';
import { DocumentSnapshot, Timestamp } from '@google-cloud/firestore';

/**
 * Setup a firebase firestore function
 */
export const sampleFunction = functions.firestore
    .document("Collection/{documentId}")
    .onCreate((snap: DocumentSnapshot, context: functions.EventContext) => { 
        // React to a document being added to a collection
    });

/**
 * Setup an firebase auth function
 */
export const authCreate = functions.auth
    .user()
    .onCreate((user: admin.auth.UserRecord, context: functions.EventContext) => { 
        // React to a user being created
    })