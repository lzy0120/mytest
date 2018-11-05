<template>
  <cube-scroll>
    <div class="newPage">
      <div class="login">
        <h1><img src="./logo.png" alt=""></h1>
        <form action="">
          <cube-input
            v-model="priseCode"
            v-bind="priseCodeOption"
          ></cube-input>
          <cube-validator
            v-model="valids[0]"
            :model="priseCode"
            :rules="priseCodeRules"
            :messages="priseCodeMessages"
          ></cube-validator>
          <cube-input
            v-model="name"
            v-bind="nameOption"
          ></cube-input>
          <cube-input
            v-model="password"
            v-bind="passwordOption"
          ></cube-input>
          <cube-input
            v-model="verCode"
            v-bind="verCodeOption"
          ></cube-input>
        </form>
        <div class="btn">
          <button>登陆</button>
        </div>
        <p>客服热线：<em>400 921 0248</em></p>
      </div>
    </div>
  </cube-scroll>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'login',
    data () {
      return {
        valids: [ undefined, undefined, undefined, undefined ],
        priseCode: '',
        priseCodeOption: {
          placeholder: '请输入您的企业代码',
          clearable: true
        },
        priseCodeRules: {
          required: true
        },
        priseCodeMessages: {
          required: '请输入您的企业代码!'
        },
        name: '',
        nameOption: {
          placeholder: '请输入您的用户名',
          clearable: true
        },
        password: '',
        passwordOption: {
          placeholder: '请输入登陆密码',
          clearable: true
        },
        verCode: '',
        verCodeOption: {
          placeholder: '请输入验证码',
          clearable: true
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
