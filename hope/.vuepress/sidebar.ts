import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "学习资料",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "关于博客",
      icon: "list",
      prefix: "about/",
      children: "structure",
    }
  ],
});