export default {   
  options: {
    renderNode: {
      ["asset-hyperlink"]: (node, next) => {
            var target = node.data.target.fields.file.url;
            return `<a target="_blank" href="https:${target}">${next(node.content)}</a>`;
      },
      ["embedded-asset-block"]: (node) => {
        var file = node.data.target.fields.file;
        var title = node.data.target.fields.title;
        if (file.contentType.substr(0, 5) === 'image') {
          return `<a href="https:${file.url}" title="${title}" target="_blank"><img alt="${title}" src="${file.url}" style="max-width:100%" /></a>`
        }
        if (file.contentType === 'application/pdf') {
          return `<iframe src="${file.url}" width="100%" height="700px" style="border: 0;"></iframe><a href="https:${file.url}" title="${title}" target="_blank">Download ${title}</a>`
        }
      }
    }
  }
}