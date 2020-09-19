<template>

      <v-data-table
      :headers="headers"
      :items="testCases"
    >
      <template v-slot:item.testCaseID="props">
        <v-edit-dialog
          :return-value.sync="props.item.testCaseID"
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        > {{ props.item.testCaseID }}
          <template v-slot:input>
            <v-text-field
              v-model="props.item.testCaseID"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <!-- <template v-slot:item.iron="props">
        <v-edit-dialog
          :return-value.sync="props.item.iron"
          large
          persistent
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.iron }}</div>
          <template v-slot:input>
            <div class="mt-4 title">Update Iron</div>
          </template>
          <template v-slot:input>
            <v-text-field
              v-model="props.item.iron"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template> -->
    </v-data-table>
</template>

<script>
export default {
  name: 'TestCaseGridView',

  props: {
    testCases: Array
  },

  data () {
    return {
      snack: false,
      snackColor: '',
      snackText: '',
      max25chars: v => v.length <= 25 || 'Input too long!',
      pagination: {},
      headers: [
        {
          text: 'Test Case ID',
          align: 'start',
          sortable: false,
          value: 'testCaseID'
        },
        { text: 'Title', value: 'title' },
        { text: 'URL', value: 'url' },
        { text: 'Tools', value: 'tools' },
        { text: 'Tags', value: 'tags' },
        { text: 'Man Hours', value: 'manHours' },
        { text: 'Priority', value: 'priority' }
      ]
    }
  },
  methods: {
    save () {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data saved'
    },
    cancel () {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Canceled'
    },
    open () {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Dialog opened'
    },
    close () {
      console.log('Dialog closed')
    }
  }
}
</script>
