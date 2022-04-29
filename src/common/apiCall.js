import axios from 'axios';

export default {
  data() {
    return {
      responseData: null,
      tableData: [],
    };
  },
  methods: {
    async myAPICall(user) {
      axios
        .post(process.env.VUE_APP_API_URL + '/login', {
          email: user.email,
          password: user.password,
        })
        .then(async (response) => {
          this.responseData = response;
          return;
        })
        .catch((error) => {
          this.errorHandle(error);
        });
    },
    async getData() {
      const URL = `${process.env.VUE_APP_MIX_PARSE_API}scheduling/patient/get_specialist_agenda/lSVGBqwKEk`;
      const startDate = new Date();
      const endDate = new Date();
      let beginOfDay = startDate;
      beginOfDay.setHours(0, 0, 0, 0);

      let endOfDay = endDate;
      endOfDay.setHours(23, 59, 59, 999);
      const data = {
        slug: 'geap-saude',
        timezone: "Asia/Calcutta",
        agenda_date: startDate.toUTCString(),
        agenda_start_time: beginOfDay.toUTCString(),
        agenda_end_time: endOfDay.toUTCString(),
        speciality: 'Alergia e Imunologia',
        corporation: "geap-saude",
      };
      axios
        .get(URL, { params: data })
        .then(async (response) => {
          this.tableData = response;
          return;
        })
        .catch((error) => {
          this.errorHandle(error);
        });
    },
  },
};
