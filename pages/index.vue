<template>
  <div class="container flex flex-wrap flex-row">
    <img
      src="@/static/images/smashing-foto-1.jpg"
      class="-mt-8 w-full h-32 md:h-48 lg:h-64 object-cover object-center mb-4"
    >
    <ul v-if="news" class="px-6 lg:px-0 mb-4">
      <li v-for="(post, index) in news" :key="index" class="pb-4">
        <h2
          class="text-xl text-bold mb-1 border-smashing border-b text-smashing"
        >{{post.fields.title}}</h2>
        <div class="text-smashing pr-1">{{post.sys.createdAt | formatDate}}</div>
        <div v-html="$md.render(post.fields.content)"></div>
        <div class="flex flex-row flex-wrap -mx-2" v-if="post.fields.attachments && post.fields.attachments.length > 0">
          <div class="flex-grow-0 flex-shrink-0 w-1/2 xl:w-1/6 md:w-1/4 p-2" v-for="(attachment, attachmentIndex) in post.fields.attachments" :key="attachmentIndex">
            <img class="cursor-pointer rounded" @click="clickImage" :src="attachment.fields.file.url" :alt="attachment.fields.title" v-if="attachment.fields.file.contentType.startsWith('image/')" />
            <a class="block text-center h-full flex flex-col-reverse justify-between p-2 border rounded relative" v-else :href="attachment.fields.file.url" target="_blank">{{attachment.fields.title}}
              <img src="@/static/images/ball.svg" class="self-center w-1/2 h-1/2 mt-2"></a>          
          </div>
        </div>
      </li>
      <li><nuxt-link class="text-xl text-bold mb-1 border-smashing border-b text-smashing" :to="{name: 'archief'}">Ouder nieuws ...</nuxt-link></li>
    </ul>
  </div>
</template>
<script>
const NEWS_LIMIT = 3;
export default {
  methods: {
    clickImage(e){
      let target = e.target || e.srcElement;
      if (target && target.tagName === "IMG") {
        window.open(target.src);
      }
    }
  },  
  computed: {
    news() {
      return this.$store.state.news.news.filter((e, i) => i < NEWS_LIMIT);
    }
  },
  filters: {
    formatDate: str => {
      var options = { year: "numeric", month: "numeric", day: "numeric" };
      var date = new Date(str);
      return date.toLocaleDateString("nl-NL", options);
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("news/getNews", {limit: NEWS_LIMIT});
    await store.dispatch("pages/getPageHeaders");
  }
};
</script>

