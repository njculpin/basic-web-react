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

export const postCard = async (card) => {

}
