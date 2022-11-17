/** @jsx h */

import blog from "blog";

blog({
  title: "Ariel Diaz",
  description: "Tech articles, quick guides and stuff.",
  avatar: "img/icon.jfif",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:contact@fullmetalbrackets.com" },
    { title: "GitHub", url: "https://github.com/fullmetalbrackets" },
    { title: "Site", url: "https://arieldiaz.codes" },
  ],
  lang: "en",
  dateStyle: "long",
  favicon: "favicon.ico",
  // middlewares: [

  // If you want to set up Google Analytics, paste your GA key here.
  // ga("UA-XXXXXXXX-X"),

  // If you want to provide some redirections, you can specify them here,
  // pathname specified in a key will redirect to pathname in the value.
  // redirects({
  //  "/hello_world.html": "/hello_world",
  // }),

  // ]
});
