<template>
  <div class="dataTable">
    <h1>Data Table</h1>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :pagination-options="{
        enabled: true,
        mode: 'records',
        perPageDropdown: [5, 10, 15]
      }"
    />
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css';
import { VueGoodTable } from 'vue-good-table';
import apiCall from '../common/apiCall';
export default {
  name: 'TableDataComponent',
  components: { VueGoodTable },
  mixins: [apiCall],
  data() {
    return {
      columns: [
        {
          label: 'ID',
          field: 'staff_id',
        },
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Job',
          field: 'job',
        },
        {
          label: 'Slots',
          field: 'slots',
        },
      ],
      rows: [],
    };
  },
  watch: {
    tableData(response) {
      this.TableResponse(response);
    },
  },
  async mounted() {
    await this.getData();
  },
  methods: {
    TableResponse: function (response) {
      if (response.data.message === 'Success!') {
        for (let i = 0; i < response.data.result.length; i++) {
          this.rows.push({
            staff_id: i + 1,
            name: response.data.result[i].name,
            job: response.data.result[i].job,
            slots: response.data.result[i].slots,
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.dataTable {
  width: 65%;
  display: block;
  margin: 0 auto;
  margin-top: 1%;
}
</style>