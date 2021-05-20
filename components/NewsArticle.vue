<template>
  <article class="card mb-4">
    <div class="card-header">
      <h5 class="text-white">
        {{ post.fields.title }}
      </h5>
    </div>
    <div class="card-body">
      <div class="text-muted">
        {{ $moment(post.sys.updatedAt).calendar() }}
      </div>
      <div
        class="md-content"
        v-html="documentToHtmlString(post.fields.text)"
      ></div>
      <div
        class="flex flex-row flex-wrap -mx-2"
        v-if="post.fields.attachments && post.fields.attachments.length > 0"
      >
        <div
          class="news-attachment flex-grow-0 flex-shrink-0 w-1/2 xl:w-1/6 md:w-1/4 p-2"
          v-for="(attachment, attachmentIndex) in post.fields.attachments"
          :key="attachmentIndex"
        >
          <img
            class="cursor-pointer rounded"
            @click="clickImage"
            :src="attachment.fields.file.url"
            :alt="attachment.fields.title"
            v-if="
              attachment.fields &&
              attachment.fields.file.contentType.startsWith('image/')
            "
          />
          <a
            class="block text-center h-full flex flex-col-reverse justify-between p-2 border rounded relative"
            v-else-if="attachment.fields"
            :href="attachment.fields.file.url"
            target="_blank"
            >{{ attachment.fields.title }}
            <img
              src="@/static/images/ball.svg"
              class="self-center w-1/2 h-1/2 mt-2"
          /></a>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import render from "@/modules/render-options";
export default {
  props: ["post"],
  methods: {
    clickImage(e) {
      let target = e.target || e.srcElement;
      if (target && target.tagName === "IMG") {
        window.open(target.src);
      }
    },
    documentToHtmlString(doc) {
      return documentToHtmlString(doc, render.options);
    },
  },
};
</script>
<style lang="scss" scoped>
.news-attachment {
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
}
</style>
