<template>
  <div class="content-frame">
    <h1 style="text-align: center; background: #de31aa; color: white">4/17(日)までの提出をお願いします。</h1>
    <h2>4/11にプレビューサイトを更新しました。</h2>
    <div style="width: 100%; border-radius: 1rem; border-style: solid; border-width: 2px;">
      <h1>本プレビューサイトのご利用にあたって</h1>
      本サイトで入力頂きましたデータは一切保存されません。各データの提出は<a
        href="https://docs.google.com/forms/d/1NxcyHbnuFiHzdJcBsyCVoN1508oekEDDKbUzPd7Stq0">提出フォーム</a>をご利用ください。<br>
      本サイトは本ページのデザインから変更がないことを保証するものではありません。多少変更が加わります。ご了承ください。<br>
      WEB展示のPDF,Youtube動画の埋め込みは企画紹介の後ろに表示されます。
    </div>
    <h1>アイコン画像(必ず正方形で。PCでのプレビュー推奨)</h1>
    <img :src="this.entities.imgLocation" v-if="this.entities.imgLocation" width="300px" height="300px">
    <input type="file" ref="image" @change="processIcon"/>
    <h1>企画名(15文字以内推奨)</h1>
    <input v-model="entities.eventName"/>
    <h1>団体名(9文字以内推奨)</h1>
    <input v-model="entities.orgName"/>
    <h1>企画説明文(文字数無制限)</h1>
    <textarea v-model="entities.eventDescription" style="height: 500px"/>
    <h1>団体説明文(文字数無制限、プレビュー未対応)</h1>
    <input v-model="entities.orgDescription"/>
  </div>
</template>

<style lang="scss" scoped>
.content-frame {
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>

<script>

export default {
  name: 'DataForm',
  data: () => ({
    entities: {
      imgLocation: null,
      eventName: "",
      orgName: "",
      eventDescription: "",
      orgDescription: ""
    }
  }),
  created() {
    this.entities = this.$store.state.entities
  },
  methods: {
    processIcon: function () {
      if (this.entities.imgLocation) {
        URL.revokeObjectURL(this.entities.imgLocation)
      }
      const file = this.$refs.image.files[0]
      this.entities.imgLocation = URL.createObjectURL(file)
    }
  }
}
</script>
