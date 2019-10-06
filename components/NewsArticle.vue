<template>
    <div>
        <h2
          class="text-xl text-bold mb-1 border-smashing border-b text-smashing"
        >{{post.fields.title}}</h2>
        <div class="text-smashing pr-1">{{post.sys.createdAt | formatDate}}</div>
        <div class="md-content" v-html="$md.render(post.fields.content)"></div>
        <div class="flex flex-row flex-wrap -mx-2" v-if="post.fields.attachments && post.fields.attachments.length > 0">
          <div class="news-attachment flex-grow-0 flex-shrink-0 w-1/2 xl:w-1/6 md:w-1/4 p-2" v-for="(attachment, attachmentIndex) in post.fields.attachments" :key="attachmentIndex">
            <img class="cursor-pointer rounded" @click="clickImage" :src="attachment.fields.file.url" :alt="attachment.fields.title" v-if="attachment.fields.file.contentType.startsWith('image/')" />
            <a class="block text-center h-full flex flex-col-reverse justify-between p-2 border rounded relative" v-else :href="attachment.fields.file.url" target="_blank">{{attachment.fields.title}}
              <img src="@/static/images/ball.svg" class="self-center w-1/2 h-1/2 mt-2"></a>          
          </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['post'],
  methods: {
    clickImage(e){
      let target = e.target || e.srcElement;
      if (target && target.tagName === "IMG") {
        window.open(target.src);
      }
    }
  },
  filters: {
    formatDate: str => {
      var options = { year: "numeric", month: "numeric", day: "numeric" };
      var date = new Date(str);
      return date.toLocaleDateString("nl-NL", options);
    }
  }
}
</script>
<style lang="scss" scoped>
.news-attachment {
  transition: all .2s ease;

  &:hover {
    transform: translateY(-5px);
  }
}
</style>