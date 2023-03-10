/** @type {import('next').NextConfig} */
// next.config.js
const withLess = require("next-with-less");

module.exports = withLess({
  images: {
    domains: ["fakestoreapi.com"],
  },
  lessLoaderOptions: {
    /* ... */
  },
});
