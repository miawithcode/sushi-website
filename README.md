# Responsive Sushi Website
![](/public/index.png)

- Here's the [demo](https://mia-sushi-website.vercel.app/)
- This is the [tutorial]() I've been followed.

## Feature
- 响应式页面。
- 页面的滑动页内元素有渐入动画。

## What I learned
1. 利用 AOS 可以轻松添加滑入动画。
  - 安装 AOS 包
    ```bash
    npm install aos
    ```
  - 在 JavaScript 文件中导入并初始化
    ```javascript
    import AOS from "aos";
    import "aos/dist/aos.css";

    // init AOS animation
    AOS.init({
    duration: 1500,
    offset: 100,
    });
    ```
  - 使用 AOS
    ```HTML
    <div data-aos="fade-left"></div>
    ```


## Building
- [ ] 当前点击菜单只会滑动到当前页面的某一部分，添加菜单中的其他页面
  - [ ] About 页
  - [ ] Menu 页
  - [ ] Trending 页
  - [ ] Conact 页
- [ ] 添加搜索功能
- [ ] 添加发送邮件功能
