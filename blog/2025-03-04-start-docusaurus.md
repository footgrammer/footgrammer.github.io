---
slug: start-docusaurus
title: 내가 블로그로 도큐사우루스를 선택한 이유!
authors: [junseok]
tags: [journal, docusaurus, github-pages]
date: 2025-03-04T22:00
---

# Docusaurus

# 0. 도입배경

스파르타코딩클럽에서 Flutter 부트캠프를 시작하면서 배운 내용들을 정리하고 배우는 과정에서 느낀 점을 기록하기 위한 기술 블로그를 시작하고자 했다.

그래서 알아보니까 크게 3가지의 선택지가 있었다.

<!-- truncate -->

- tistory
- velog
- github pages

이렇게 3가지가 있었는데 뭔가 tistory와 velog가 기록하기는 쉽지만 커스터마이징하기가 어렵기도 하고 나중에 광고도 붙이고 싶어서 github pages를 이용하기로 결심을 했다!

## 오케이. 그러면 어떻게 github pages로 정적 페이지를 만들지?

만드는 방법을 알아보기 위해 유튜브에서 튜토리얼을 검색해 봤는데 테디노트님의 ‘깃헙 블로그 10분만에 완성하기’가 나왔다.

[깃헙(GitHub) 블로그 10분안에 완성하기](https://youtu.be/ACzFIAOsfpM?si=LWXy6GpuRZMrNIN5)

이 영상에서는 jekyll-theme 을 활용해서 블로그를 만드는 방법을 소개해 줬다. 그래서 내가 마음에 드는 테마를 선택하고 따라서 해 봤다.

하지만 여기서 문제가 발생했다. 템플릿을 사용해서 내 github repository 에 코드를 복사하면 블로그가 잘 나왔지만 내가 markdown 문서를 작성하고 글을 쓰면 왠지 모르게 404 error가 나고 글이 보이지가 않았다.

원인을 몰랐지만 구글링을 하던 도중 github repository에 새로 작성한 markdown 문서가 잘 배포되고 있지 않다는 것을 알게 되었다. 새로운 파일들을 업로드하고 repository에 push를 하면 오류가 나오는 것을 보게 되었다. 그래서 이런 문제점들을 보면서 추후에도 여러 가지 크고 작은 에러가 많이 생길 것 같은 느낌이 들었다.

## 튜터님과의 면담

그렇게 블로그에 에러가 생겨서 TIL(Today I learned) 문서도 작성하지 못하고 있는 와중에 튜터님과 개인면담을 하게 되었고 블로그 얘기를 하던 도중 튜터님께서 docusaurus에 대해서 알려 주셨다. docusaurus의 존재 자체를 모르고 있었는데 프런트를 할 수 있으면 편하게 커스터마이징도 가능하고 요즘 인기가 많아지고 있는 프레임워크라고 해서 공식 홈페이지에 들어가 보았다.

나도 예전 프로젝트의 프런트엔드를 Vue Js로 해 본 적이 있기 때문에 docusaurus가 그렇게 낯설지는 않았고 조금 공부하면 할 수 있을 것 같은 느낌이 들었다. 그래서 에러가 많이 나는 jekyll-theme을 포기하고 docusaurus로 갈아타게 되었다.

---

# 1. Create Github repository

github page를 만들려면 먼저 github repository를 생성해야 한다.

보통 각자의 github username이 있을텐데 repository 이름을 [`username.github.io`](http://username.github.io) 로 설정을 해줘야 한다.

---

# 2. Docusaurus 프로젝트 시작

도큐사우러스 홈페이지 공식문서에서 프로젝트를 시작하기 위한 안내에서 이렇게 나와 있다.

```jsx
npm init docusaurus@latest [folder name] classic
// 클래식 템플릿 생성

cd [folder name]
npm start
```

이렇게 초기설정을 하고 `npm start` 를 하면 기본 페이지가 나오는 것을 볼 수 있다.

나는 typescript로 프로젝트를 시작해서 `docusaurus.config.ts` 에서 프로젝트 설정을 진행했다.

## 프로젝트 설정

```tsx
import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Blog title",
  tagline: "[Blog explanation]",
  favicon: "img/image.png",
  // 나는 블로그 로고를 바꾸고 싶어서 내가 갖고 있는 이미지를 img 폴더에 복사를 해서 사용했다.

  // Set the production url of your site here
  url: "https://[your repository name].github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // 영어설명에서 /projectName/ 이렇게 하라고 해서 내 유저네임을 넣었는데 그냥 /만 쓰면 됐었다.
  baseUrl: "/",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "github user name", // Usually your GitHub org/user name.
  projectName: "repo name", // Usually your repo name.
  // 나는 어차피 내 유저이름을 레포지터리 이름으로 사용했기 때문에 github user name을 넣어줬다.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https:/footgrammer.github.io/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https:/footgrammer.github.io/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Footgrammer",
      logo: {
        alt: "Footballlover Logo",
        src: "img/footballlover.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
```

나는 설정 파일에서 `title`, `tagline`, `favicon`, `url`, `baseUrl` 이 정도만 변경해 줬다.

`baseUrl` 이 가장 헷갈렸는데 깃헙 페이지는 보통 root url이 https://[username].github.io 이기 때문에 ‘/’ 이렇게 하면 됐었다.

이렇게 설정을 하고 github repository에 배포를 하면 정상적으로 작동할 줄 알았지만 그렇지 않았다. 프로젝트 전체를 repository에 push를 하면 repository에 있는 [readme.md](http://readme.md) 파일이 나오게 되는데 이 부분에 대한 설정은 다음 포스팅에 적도록 하겠습니다🙂

---
