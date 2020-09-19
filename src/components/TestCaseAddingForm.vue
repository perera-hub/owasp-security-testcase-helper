<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    v-model="testCaseModel.testCaseID"
                    :counter="10"
                    label="OWASP test case ID"
                    required
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    v-model="testCaseModel.title"
                    :counter="10"
                    label="OWASP test case title"
                    required
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    v-model="testCaseModel.url"
                    label="OWASP test case URL"
                    required
                ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                    <v-combobox
                    v-model="testCaseModel.tools"
                    :items="testCaseModel.tools"
                    label="Tools"
                    multiple
                    chips
                    ></v-combobox>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                    <v-combobox
                    v-model="testCaseModel.tags"
                    :items="testCaseModel.tags"
                    label="Tags"
                    multiple
                    chips
                    ></v-combobox>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                    <v-text-field
                    v-model="testCaseModel.manHours"
                    label="Man hours"
                    required
                ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                    <v-text-field
                    v-model="testCaseModel.priority"
                    label="Priority"
                    required
                ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                    <v-btn
                        color="success"
                        class="mr-4"
                        @click="submit"
                    >Save</v-btn>
                </v-col>
            </v-row>
        </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'TestCaseAddingForm',
  data () {
    return {
      testCaseModel: {
        // testCaseID: 'WSTG-INPV-07',
        // title: 'Testing for XML Injection',
        // url: 'https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/07-Testing_for_XML_Injection.html',
        // tools: ['wfuzz'],
        // tags: ['xml', 'injection'],
        // manHours: 20,
        // priority: 'High,Low,Medium'
        testCaseID: '',
        title: '',
        url: '',
        tools: [],
        tags: [],
        manHours: 0,
        priority: ''

      },
      valid: true
    }
  },
  methods: {
    submit () {
      this.$emit('testcasesubmitted', this.testCaseModel)
    }
  }
}
</script>
