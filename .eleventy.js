module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/css");
    eleventyConfig.addPassthroughCopy("assets/images");
};
