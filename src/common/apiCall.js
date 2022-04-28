import axios from 'axios';

export default {
    data() {
        return {
          responseData : null,
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
            this.responseData = response
            return
        })
        .catch((error) => {
            this.errorHandle(error);
        });
    },
  },
};
