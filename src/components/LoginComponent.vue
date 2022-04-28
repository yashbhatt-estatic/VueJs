<template>
  <div class="main-container">
    <div class="login-box">
      <div class="header">
        <h2>Login Page</h2>
      </div>
      <div class="login">
        <div class="form-control1">
          <input
            type="text"
            placeholder="Email"
            class="tbox"
            v-model="email"
            required
          />
        </div>
        <div class="form-control1">
          <input
            type="password"
            placeholder="Password"
            class="tbox"
            v-model="password"
            required
          />
        </div>
        <div class="form-control1">
          <input
            type="submit"
            value="Login Now"
            class="btn"
            @click="loginUser"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css';
import commonMixin from '../common/mixins';
import apiCall from '../common/apiCall';

export default {
  name: 'LoginComponent',
  mixins: [commonMixin, apiCall],
  data() {
    return {
      email: '',
      password: '',
      response: null,
    };
  },
  watch: {
    responseData(response) {
      this.redirectOnResponce(response);
    },
  },
  methods: {
    redirectOnResponce: function(response) {
        this.$toast.success({
          title: 'Successfully',
          message: response.data.email + ' logged in successfully',
        });
        localStorage.setItem('authenticated', true);
        this.$router.push('/home');
    },
    loginUser: async function () {
      let user = {
        email: this.email,
        password: this.password,
      };
      if (this.email !== '' && this.password !== '') {
        await this.myAPICall(user);
      } else {
        this.emptyFeild();
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f5f5f5;
  font-family: Arial;
}

.main-container {
  display: flex;
  justify-content: center;
}

.login-box {
  border-radius: 4px;
  background-color: #fff;
  width: 450px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  margin-top: 50px;
}

.header {
  background: center #3f51b5;
  background-size: cover;
  height: 130px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  align-items: center;
  color: #f5f5f5;
}

.tbox {
  width: 97.33%;
  height: 45px;
  padding-left: 10px;
  border-radius: 3px;
  border: 1px solid #f1f1f1;
  margin-bottom: 10px;
  outline: none;
  font-size: 0.9rem;
  transition: 0.6s;
  color: #333;
}

.tbox:focus {
  border: 1px solid rgba(12, 8, 9, 0.36);
  transition: 0.6s;
  color: #1f1719;
}
.login {
  margin: 15px 20px;
}

.btn {
  cursor: pointer;
  border: 1px solid #f5f5f5;
  width: 100%;
  padding: 15px 0;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #033551;
  color: #f5f5f5;
  font-size: 1.2rem;
  outline: none;
  transition: 0.6s;
}
.btn:hover {
  background-color: #333;
  transition: 0.6s;
}

.forget-box {
  text-align: center;
}

.link {
  color: #75334e;
}
</style>
