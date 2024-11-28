module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/img");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
// test 