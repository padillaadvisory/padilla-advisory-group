module.exports = function (eleventyConfig) {
  // Static assets copied verbatim
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/llms.txt");
  eleventyConfig.addPassthroughCopy("src/thank-you.html");
  eleventyConfig.addPassthroughCopy("src/_redirects");

  // -- Site data (single source of truth; edit here to launch a new market) --
  eleventyConfig.addGlobalData("site", {
    name: "Padilla Advisory Group",
    url: "https://padillaadvisorygroup.com",
    city: "Los Angeles",
    tagline: "Guiding your next chapter.",
    defaultDescription:
      "Padilla Advisory Group works exclusively with longtime Los Angeles homeowners ready for what's next — simplifying, unlocking equity, and moving forward with clarity, discretion, and zero pressure. Based in Beverly Hills, serving all of LA.",
    advisor: { name: "Alejandro Padilla", short: "Alex Padilla", title: "Senior Advisor", dre: "01984740" },
    brokerage: "PLG Estates",
    phoneDisplay: "(424) 344-8164",
    phoneHref: "+14243448164",
    email: "alex@padillaadvisorygroup.com",
    address: { street: "9800 Wilshire Blvd", locality: "Beverly Hills", region: "CA", postal: "90212" },
    facebook: "https://www.facebook.com/PadillaAdvisoryGroup",
    blogName: "The Downsizing Journal",
    year: new Date().getFullYear(),
  });

  // Date helpers
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("yyyymmdd", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("newestDate", (posts) =>
    !posts || !posts.length ? new Date().toISOString() : new Date(Math.max(...posts.map((p) => p.date))).toISOString()
  );

  // Blog collection, newest first
  eleventyConfig.addCollection("posts", (c) =>
    c.getFilteredByGlob("src/blog/posts/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    // includes folder has NO underscore, so GitHub's uploader won't drop it
    dir: { input: "src", includes: "includes", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
  };
};
