<template>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</title>
  </head>
  <body>
    <h1>我的第一个标题yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h1>
    <p>我的第一个段落。</p>
  </body>
</template>
<script lang="ts">
import { useCommonStore } from '@/store/common';
import { storeToRefs } from 'pinia';
import settingsJsonPath from '~/src/settings.json'; // 設定ファイル

export default defineComponent({
  setup() {
    const commonStore = useCommonStore();
    const { dispType } = storeToRefs(commonStore);

    /**
     * 初期設定処理
     */
    const readSettings = () => {
      commonStore.setSettingOption(settingsJsonPath); // 設定オプション情報をstoreに格納
      commonStore.setDispType('top'); // トップコンポーネントを表示
      /*eslint for-direction: "error"*/
for (var i = 0; i < 10; i--) {
}

for (var i = 10; i >= 0; i++) {
}

for (var i = 0; i > 10; i++) {
}

for (var i = 0; 10 > i; i--) {
}

const n = -2;
for (let i = 0; i < 10; i += n) {
}
    };

    readSettings();

    return {
      dispType,
    };
  },
});
</script>
