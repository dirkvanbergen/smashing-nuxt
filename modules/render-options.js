export default {   
  options: {
    renderNode: {
      ["asset-hyperlink"]: (node, next) => {
            var target = node.data.target.fields.file.url;
            return `<a target="_blank" href="https:${target}">${next(node.content)}</a>`;
      },
      ["embedded-asset-block"]: (node) => {
        var file = node.data.target.fields.file;
        if (file.contentType.substr(0, 5) === 'image') {
          var title = node.data.target.fields.title;
          return `<a href="https:${file.url}" title="${title}" target="_blank"><img alt="${title}" src="${file.url}" /></a>`
        }
      }
    }
  }
}