<template>
  <div id="app">
    <h1 class="main-title">Memo App</h1>
    <div class="form">
      <div class="form-group">
        <input v-model="title" placeholder="タイトル" class="form-control" />
      </div>
      <div class="form-group">
        <input v-model="description" placeholder="説明" class="form-control" />
      </div>
      <button class="btn" @click="addMemo">メモを追加</button>
    </div>
    <div class="flex">
      <div v-for="memo in memos" :key="memo.id" class="card">
        <div class="card-body">
          <div class="card-title">
            {{ memo.title }}
          </div>
          {{ memo.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      memos: 'memos',
      title: '',
      description: '',
    };
  },
  mounted() {
    this.setMemo();
  },
  methods: {
    setMemo: function() {
      axios.get('/api/memos').then((res) => (this.memos = res.data));
    },
    addMemo: function() {
      axios
        .post('/api/memos', {
          title: this.title,
          description: this.description,
        })
        .then((res) => {
          this.setMemo();
          this.title = '';
          this.description = '';
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.main-title {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  letter-spacing: 3px;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px;
  &-group {
    margin-bottom: 1rem;
  }
  &-control {
    width: 600px;
    min-height: 24px;
    font-size: 1rem;
    border: 1px solid #ced4da;
    padding: 4px 8px;
    border-radius: 3px;
    border: 2px solid #ddd;
  }
}
.form:focus {
  border: 2px solid #ff9900;
  z-index: 10;
  outline: 0;
}
.btn {
  display: inline-block;
  border-radius: 10%; /* 角丸       */
  font-size: 15pt; /* 文字サイズ */
  text-align: center; /* 文字位置   */
  cursor: pointer; /* カーソル   */
  padding: 16px 56px; /* 余白       */
  background: #006666; /* 背景色     */
  color: #ffffff; /* 文字色     */
  line-height: 1em; /* 1行の高さ  */
  transition: 0.3s; /* なめらか変化 */
  box-shadow: 4px 4px 6px #666666; /* 影の設定 */
  border: 2px solid #006666; /* 枠の指定 */
}
.btn:hover {
  box-shadow: none; /* カーソル時の影消去 */
  color: #006666; /* 背景色     */
  background: #ffffff; /* 文字色     */
}

.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 238px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin: 16px;
  &-body {
    padding: 1.25rem;
  }
  &-title {
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
}
</style>
