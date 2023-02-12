import { getFirestore } from "firebase/firestore";
import app from "../firebase.config";

const database = getFirestore(app);
export default database ;
  