import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const queryByCollection = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName))
    const docs = Array.from(querySnapshot.docs).map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    return docs
  } catch (error) {
    return { err: error.message }
  }
}

export { queryByCollection }
