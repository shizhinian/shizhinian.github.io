---
theme: academic
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-left
highlighter: shikiji
lineNumbers: true
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: this is my first markdown slide
mdc: true
selectable: "true"
---


# 20240106汇报
---
transition: slide-left

---
# 这是用来做实验的一页slide
## 二级标题
使用 CDN 资源是指将您的应用程序的静态资源（例如 JavaScript、CSS 和图像）托管在内容分发网络（CDN）上，以便在全球范围内快速传递这些资源给用户 12. 当您使用 CDN 时，您的应用程序的资源将被存储在多个服务器上，这些服务器位于全球各地，以便用户可以从最近的服务器获取资源。这可以提高您的应用程序的性能和可用性，并减少您的服务器负载。

在打包应用程序之后，您可以将应用程序的静态资源上传到 CDN 上，然后在应用程序中使用 CDN 资源的 URL 来引用这些资源。这样，当用户访问您的应用程序时，他们将从最近的 CDN 服务器获取资源，而不是从您的服务器获取资源。这可以提高您的应用程序的加载速度，并减少您的服务器负载。


<!--
1234
-->
---
transition: slide-left

---
# try
obsidian自带的wiki链接文件或者图片的方法对于slidev是不适用的。  
而obsidian不支持\<img\>标签的相对路径插入图片。





---
transition: slide-left

---
# 需要实现的布局
1. 双栏
2. 三栏
3. 左图右文
4. 右图左文
# 需要实现的功能
1. 字体可调
2. 行间距可调
3. 设置母版
4. 各级标题及正文字体字号调整
5. 一页支持显示多张图片



---
transition: slide-left

---
# 终于搞明白分页了
```c++
#include <iostream>
#include <pthread>

namespace std;

int main() {
	cout << "hello world" << endl;
}
```

---
transition: slide-left
layout: image-x
image: 'AMCL.png'
imageOrder: 2

---
# 左文右图布局
有很多功能丰富的、通用的、所见即所得的幻灯片制作工具，例如 [微软 PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) 或 [苹果 Keynote](https://www.apple.com/keynote/). 它们在制作带有动画、图表和许多其他漂亮的幻灯片方面效果相当好，同时非常直观和容易学习。那么，为什么要费心制作 Slidev 呢？  
Slidev 旨在为开发者提供灵活性和交互性，通过使用他们已经熟悉的工具和技术，使他们的演示文稿更加有趣、更具表现力和吸引力。  
当使用所见即所得的编辑器时，人们很容易被样式选项所干扰。Slidev 通过分离内容和视觉效果来弥补这一点。这使你能够一次专注于一件事，同时也能够重复使用社区中的主题。Slidev 并不寻求完全取代其他幻灯片制作工具。相反，它专注于迎合开发者社区的需求。p-2 是10px 除回去的话是8px，p-1 = 5px 245份×138份

---
layout: image-double
image1: 'AMCL.png'
image2: '色深.png'

---
# 左文右图布局
有很多功能丰富的、通用的、所见即所得的幻灯片制作工具，例如 [微软 PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) 或 [苹果 Keynote](https://www.apple.com/keynote/). 它们在制作带有动画、图表和许多其他漂亮的幻灯片方面效果相当好，同时非常直观和容易学习。那么，为什么要费心制作 Slidev 呢？

Slidev 旨在为开发者提供灵活性和交互性，通过使用他们已经熟悉的工具和技术，使他们的演示文稿更加有趣、更具表现力和吸引力。


当使用所见即所得的编辑器时，人们很容易被样式选项所干扰。Slidev 通过分离内容和视觉效果来弥补这一点。这使你能够一次专注于一件事，同时也能够重复使用社区中的主题。Slidev 并不寻求完全取代其他幻灯片制作工具。相反，它专注于迎合开发者社区的需求。

---
layout: 3-images-x
image1: 'AMCL.png'
image2: '色深.png'
image3: '人工势能法示意图.png'
imageOrder: 2

---
# PRM算法（Probabilistic Roadmaps）
Slidev 旨在为开发者提供灵活性和交互性，通过使用他们已经熟悉的工具和技术，使他们的演示文稿更加有趣、更具表现力和吸引力。

当使用所见即所得的编辑器时，人们很容易被样式选项所干扰。Slidev 通过分离内容和视觉效果来弥补这一点。这使你能够一次专注于一件事，同时也能够重复使用社区中的主题。Slidev 并不寻求完全取代其他幻灯片制作工具。相反，它专注于迎合开发者社区的需求。

---
layout: section

---
# Lorem ipsum dolor sit 
zheshiyiduanwenzi  
zheshiyiduanwenzi  
zheshiyiduanwenzi
%%middle%%

1  
1  
%%right%%

2  
2


---
layout: default

---
# ssss
## ddd
### ddd

---
layout: image-4-cols-1
image1: AMCL.png
image2: 色深.png
image3: DCB改正.png
image4: 江西理工.JPG

---
# 4列图片加文字布局

%%text1%%
当使用所见即所得的编辑器时，人们很容易被样式选项所干扰。Slidev 通过分离内容和视觉效果来弥补这一点。这使你能够一次专注于一件事，同时也能够重复使用社区中的主题。Slidev 并不寻求完全取代其他幻灯片制作工具。相反，它专注于迎合开发者社区的需求。
%%text2%%

原始大小980 552  × 1.25  
= 当前大小1225 690

%%text3%%
DCBG改正

%%text4%%
江西理工大学

---
transition: slide-left

---
# 项目结构
slidev的基本项目结构为：
```
your-slidev/
  ├── components/       # 自定义组件
  ├── layouts/          # 自定义布局
  ├── public/           # 静态资源
  ├── setup/            # 自定义 setup / hooks
  ├── styles/           # 自定义样式
  ├── index.html        # 注入的 index.html
  ├── slides.md         # 幻灯片主入口
  └── vite.config.ts    # 扩展 vite 配置
```
<BarBottom  title="NNU">
  <Item text="slidevjs/slidev">
    <carbon:logo-github />
  </Item>
  <Item text="Slidevjs">
    <carbon:logo-twitter />
  </Item>
  <Item text="sli.dev">
    <img
      src="https://d33wubrfki0l68.cloudfront.net/273aa82ec83b3e4357492a201fb68048af1c3e6a/8f657/logo.svg"
      class="w-4"
    />
  </Item>
</BarBottom>

---
transition: slide-left

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---
layout: default

---

# Table of contents

```html
<Toc minDepth="1" maxDepth="1"></Toc>
```

<Toc maxDepth="1"></Toc>

---
level: 2

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel, [learn more](https://sli.dev/guide/navigation.html)

## Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>right</kbd> / <kbd>space</kbd>| next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

<!-- https://sli.dev/guide/animations.html#click-animations -->
<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
  alt=""
/>
<p v-after class="absolute bottom-23 left-45 opacity-30 transform -rotate-10">Here!</p>

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080

---

# Code

Use code snippets and get the highlighting directly, and even types hover![^1]

```ts {all|5|1-6|9|all} twoslash
// TwoSlash enables TypeScript hover information and errors in markdown code blocks
// Learn more at https://www.typescriptlang.org/dev/twoslash/
function getUser(id: number): User {
  return undefined as any
}
function saveUser(id: number, user: User) {
  // ...
}
// ---cut---
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
// ^?
}

function updateUser(id: number, update: User) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

<arrow v-click="[3, 4]" x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" />

[^1]: [Learn More](https://sli.dev/guide/syntax.html#line-highlighting)

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---

# Components

<div grid="~ cols-2 gap-4">
<div>

You can use Vue components directly inside your slides.

We have provided a few built-in components like `<Tweet/>` and `<Youtube/>` that you can use directly. And adding your custom components is also super easy.

```html
<Counter :count="10" />
```

<!-- ./components/Counter.vue -->
<Counter :count="10" m="t-4" />

Check out [the guides](https://sli.dev/builtin/components.html) for more.

</div>
<div>

```html
<Tweet id="1390115482657726468" />
```

<Tweet id="1390115482657726468" scale="0.65" />

</div>
</div>

<!--
Presenter note with **bold**, *italic*, and ~~striked~~ text.

Also, HTML elements are valid:
<div class="flex w-full">
  <span style="flex-grow: 1;">Left content</span>
  <span>Right content</span>
</div>
-->

---
class: px-20

---

# Themes

Slidev comes with powerful theming support. Themes can provide styles, layouts, components, or even configurations for tools. Switching between themes by just **one edit** in your frontmatter:

<div grid="~ cols-2 gap-2" m="t-2">

```yaml
---
theme: default
---
```

```yaml
---
theme: seriph
---
```

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-default/01.png?raw=true" alt="11">

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-seriph/01.png?raw=true" alt="">

</div>

Read more about [How to use a theme](https://sli.dev/themes/use.html) and
check out the [Awesome Themes Gallery](https://sli.dev/themes/gallery.html).

---
preload: false

---

# Animations

Animations are powered by [@vueuse/motion](https://motion.vueuse.org/).

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```



---

# LaTeX

LaTeX is supported out-of-box powered by [KaTeX](https://katex.org/).

<br>

Inline $\sqrt{3x-1}+(1+x)^2$

Block
$$ {1|3|all}
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$

<br>

[Learn more](https://sli.dev/guide/syntax#latex)

---

# Diagrams

You can create diagrams / graphs from textual descriptions, directly in your Markdown.

<div class="grid grid-cols-4 gap-5 pt-4 -mb-6">

```mermaid {scale: 0.5, alt: 'A simple sequence diagram'}
sequenceDiagram
    Alice->John: Hello John, how are you?
    Note over Alice,John: A typical interaction
```

```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```

```mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectivness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
```

```plantuml {scale: 0.7}
@startuml

package "Some Group" {
  HTTP - [First Component]
  [Another Component]
}

node "Other Groups" {
  FTP - [Second Component]
  [First Component] --> FTP
}

cloud {
  [Example 1]
}

database "MySql" {
  folder "This is my folder" {
    [Folder 3]
  }
  frame "Foo" {
    [Frame 4]
  }
}

[Another Component] --> [Example 1]
[Example 1] --> [Folder 3]
[Folder 3] --> [Frame 4]

@enduml
```

</div>

[Learn More](https://sli.dev/guide/syntax.html#diagrams)




---
src: ./pages/multiple-entries.md
hide: false


---


---
layout: center
class: text-center

---

# 感谢聆听，请批评指正
[Documentations](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/showcases.html)