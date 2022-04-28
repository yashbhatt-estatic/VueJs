export default {
  methods: {
    errorHandle(res) {
      this.$toast.error({
        title: ' Please Check Credentials...',
        message: res.message,
      });
    },
    emptyFeild() {
      this.$toast.warn({
        title: 'Mandatory fields',
        message: 'UserName and Password are mandatory',
      });
    },
  },
};
