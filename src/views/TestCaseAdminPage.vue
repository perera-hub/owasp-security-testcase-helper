<template>
<div>
  <test-case-adding-form v-on:testcasesubmitted="onSubmit" :isExistingTestCaseID="isExistingTestCaseID"/>
  <test-case-grid-view :testCases="testCases"/>
</div>
</template>

<script>
import TestCaseGridView from '../components/TestCaseGridView.vue'
import TestCaseAddingForm from '../components/TestCaseAddingForm.vue'
import { defaultFirestore } from '../remote-service-access/firebase-clients'

export default {
  name: 'TestCaseAdminPage',
  components: {
    TestCaseGridView,
    TestCaseAddingForm
  },
  created () {
    console.log('Vue view TestCaseAdminPage created')
    defaultFirestore.collection('OWASPTestCases').onSnapshot(this.onOWASPTestCaseCollectionSnapshotChange, this.onOWASPTestCaseCollectionSnapshotChangeError)
  },
  data () {
    return {
      testCases: [
        {
          testCaseID: 'WSTG-INPV-07',
          title: 'Testing for XML Injection',
          url: 'https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/07-Testing_for_XML_Injection.html',
          tools: ['wfuzz'],
          tags: ['xml', 'injection'],
          manHours: 20,
          priority: 'High'
        },
        {
          testCaseID: 'WSTG-CONF-02',
          title: 'Test Application Platform Configuration',
          url: 'https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/02-Test_Application_Platform_Configuration.html',
          tools: [],
          tags: ['platform', 'configuration'],
          manHours: 40,
          priority: 'High'
        },
        {
          testCaseID: 'WSTG-INFO-05',
          title: 'Review Webpage Content for Information Leakage',
          url: 'https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/01-Information_Gathering/05-Review_Webpage_Content_for_Information_Leakage.html',
          tools: ['wget', 'curl', 'burp suite', 'waybackurls', 'google maps API scanner'],
          tags: ['web app', 'information gathering'],
          manHours: 15,
          priority: 'High'
        }
      ]
    }
  },
  methods: {
    async onSubmit (eventArgs) {
      defaultFirestore.collection('OWASPTestCases').doc(eventArgs.testCaseID).set({
        title: eventArgs.title,
        url: eventArgs.url,
        tools: eventArgs.tools,
        tags: eventArgs.tags,
        manHours: eventArgs.manHours,
        priority: eventArgs.priority,
        testCaseID: eventArgs.testCaseID
      })
        .then(function () {
          console.log('Document successfully written!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    onOWASPTestCaseCollectionSnapshotChange (collection) {
      console.log('data snapshot received')
      console.log(collection)
      this.testCases = collection.docs.map(doc => doc.data())
      console.log('internal testcase array updated')
    },
    onOWASPTestCaseCollectionSnapshotChangeError (err) {
      console.error('Error during collection snapshot change: ' + err)
    },
    async isExistingTestCaseID (testCaseID) {
      try {
        var docRef = await defaultFirestore.collection('OWASPTestCases').doc(testCaseID).get()
        console.log('hu')
        return docRef.exists
      } catch (error) {
        console.error('Error trying to check if test case ID exists ' + testCaseID, error)
        return false
      }
    }
  }
}
</script>
