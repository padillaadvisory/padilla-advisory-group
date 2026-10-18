// Posts dated in the future stay hidden until their date, then publish on the next build.
// A weekly GitHub Action triggers a rebuild every Wednesday so scheduled posts go live automatically.
const isFuture = (data) => data.page.date > new Date();

module.exports = {
  eleventyComputed: {
    permalink: (data) => (isFuture(data) ? false : `/blog/${data.page.fileSlug}/`),
    eleventyExcludeFromCollections: (data) => isFuture(data),
  },
};
