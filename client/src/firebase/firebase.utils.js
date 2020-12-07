import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  // apiKey: 'AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14',
  // authDomain: 'crwn-db.firebaseapp.com',
  // databaseURL: 'https://crwn-db.firebaseio.com',
  // projectId: 'crwn-db',
  // storageBucket: 'crwn-db.appspot.com',
  // messagingSenderId: '850995411664',
  // appId: '1:850995411664:web:7ddc01d597846f65'

 // apiKey: "AIzaSyBGofBJ4HjAIzZiJL209VyPDva52ZUaQM4",
 // authDomain: "crwn-e4d18.firebaseapp.com",
 // databaseURL: "https://crwn-e4d18.firebaseio.com",
 // projectId: "crwn-e4d18",
 // storageBucket: "crwn-e4d18.appspot.com",
 // messagingSenderId: "369718003658",
 // appId: "1:369718003658:web:9195cb925a127a8063f133",
 // measurementId: "G-YY85G3FKB1"

 apiKey: "AIzaSyB5DhSEUOCmTM0Y8jdk2rbgrJoGkChTC_M",
 authDomain: "giproject-e53e8.firebaseapp.com",
 databaseURL: "https://giproject-e53e8.firebaseio.com",
 projectId: "giproject-e53e8",
 storageBucket: "giproject-e53e8.appspot.com",
 messagingSenderId: "486152885702",
 appId: "1:486152885702:web:894713658b8aee71708ec7",
 measurementId: "G-54JNRNXDDR"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  debugger;
  console.log(`objectsToAdd is  ${JSON.stringify(objectsToAdd)}`);
  var objectArr = [];
  objectArr =  objectsToAdd ? Object.keys(objectsToAdd).map(key => objectsToAdd[key]) : []

  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectArr.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
