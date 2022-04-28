export default{
  methods: {
    errorHandle (res) {
      if (res.status === 200) {
        this.$toast.success({ title: 'Successfully', message: res.data.name + 'logged in successfully' })
        localStorage.setItem('authenticated', true)
        this.$router.push('/home')
      } else {
        this.$toast.error({
          title: ' Please Check Credentials...',
          message: res.message
        })
      }
    },
    emptyFeild () {
      this.$toast.warn({
        title: 'Mandatory fields',
        message: 'UserName and Password are mandatory'
      })
    }
  }
}
