<template>
  <div id="frame">
    <div id="site_header">
      <h1>清陵祭HP-Demo</h1>
      <nav>
        <router-link to="/">情報入力</router-link>
        |
        <router-link to="/page2">企画一覧ページ(プレビューページ)</router-link>
        |
        <router-link to="/page1">企画詳細ページ(プレビューページ)</router-link>
      </nav>
    </div>
    <div id="main_view">
      <router-view/>
    </div>
  </div>
</template>
<script>
window.onbeforeunload = function () {
  return '現在のデータは保存されません。ページを離れてもよろしいですか?';
};
export default {
  data() {
    return {
      test_prop: "test",
    };
  },
};
</script>

<style scoped lang="scss">

#site_header {
  width: 100%;
  position: fixed;
  height: 150px;
  z-index: 60;
  background: white;

  h1 {
    text-align: center;
  }
}

#frame {
  display: flex;
  flex-direction: column;
}

nav {
  margin: 0 auto;
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  z-index: 100;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #de31aa;
}

#main_view {
  margin-top: 150px;
}
</style>
