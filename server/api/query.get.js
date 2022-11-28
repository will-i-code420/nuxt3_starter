import { queryByCollection } from "../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    console.log('made it to query route')
    const query = getQuery(event)
    const docs = await queryByCollection(query.collection)
    return docs
  } catch (error) {
    console.log(error)
    return error.message
  }
})
