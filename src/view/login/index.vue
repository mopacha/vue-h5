<template>
  <div class="login">
    <simple-header title="登录"> </simple-header>
    <van-cell-group class="content">
      <van-field
        v-model="username"
        label="用户名"
        clearable
        placeholder="请输入用户名"
      />
      <van-field
        type="password"
        label="密码"
        v-model="password"
        clearable
        placeholder="请输入密码"
      />
    </van-cell-group>

    <next-button @onclick="login()"></next-button>
  </div>
</template>
<script>
import { SimpleHeader } from "@/components/header";
import { Field, CellGroup } from "vant";
import { NextButton } from "@/components/buttons";

export default {
  components: {
    SimpleHeader,
    NextButton,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup
  },

  data() {
    return {
      username: "",
      password: ""
    };
  },

  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch("onLoading", true);
      this.$store
        .dispatch("Login", data)
        .then(res => {
          this.jump();
          this.$store.dispatch("onLoading", false);
        })
        .catch(err => {
          this.$store.dispatch("onLoading", false);
        });
    },
    jump() {
      this.$router.push({
        path: "goods",
        query: this.$route.query
      });
    }
  }
};
</script>

<style lang="less">
.login {
  text-align: center;
  .content {
    padding: 20px 0;
    margin-bottom: 70px;
  }
}
</style>
