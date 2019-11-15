import { firestore } from '../app/firebase'

export const getUser = async (uid) => {
  try {
    let doc = await firestore.collection('users').doc(uid).get()
    if (doc.exists) {
      return doc.data()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (e) {
    console.log(e)
  }
}

export const getUsers = async () => {
  try {
    const usersSnap = await firestore.collection('users').get()
    return usersSnap.docs.map(item => ({ id: item.id, ...item.data() }));
  } catch(e) {
    console.log('error', e)
  }
}
