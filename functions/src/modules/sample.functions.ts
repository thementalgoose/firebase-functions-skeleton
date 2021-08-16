import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import firestore from '../lib/admin';
import { DocumentSnapshot, Timestamp } from '@google-cloud/firestore';
import axios, { AxiosResponse } from 'axios';

/**
 * Example Firebase Firestore function
 */
export const sampleFunction = functions.firestore
    .document("Collection/{documentId}")
    .onCreate(async (snap: DocumentSnapshot, context: functions.EventContext) => { 
        // React to a document being added to a collection

        // EXAMPLE: Send a GET request 
        const getRequest: AxiosResponse<any> = await axios.get('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        console.log(getRequest.data);

        return;
    });

/**
 * Example Firebase Auth function
 */
export const authCreate = functions.auth
    .user()
    .onCreate(async (user: admin.auth.UserRecord, context: functions.EventContext) => { 
        // React to a user being created

        // EXAMPLE: Save something to firestore
        await firestore
            .collection("SampleCollection")
            .add({"user-created": true});

        return;
    })

/**
 * Example HTTPS request
 */
export const postRequest = functions
    .runWith({
        timeoutSeconds: 60,
        memory: '256MB'
    })
    .https
    .onRequest(async (req, res) => { 
        // React to a POST or GET request to https://<region>-<project-id>.cloudfunctions.net/function-name.
        // Look in the functions tab in the console to find out more

        // EXAMPLE: Send a POST request
        const postRequest: AxiosResponse<any> = await axios.post(`https://sample.com/login`, { 'username': 'username', 'password': 'password' });
        res.status(200).send(postRequest.data);

        return;
    });