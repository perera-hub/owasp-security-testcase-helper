import appConfig from '../../../public/config'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const defaultFirestore = firebase
  .initializeApp(appConfig.defaultFireStoreConfigObject)
  .firestore()
