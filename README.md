# vite-vue-admin

## 安装依赖

```
npm i pnpm -g

pnpm install
```

### mock 环境

```
pnpm run dev:local
```

### 开发环境

```
pnpm run dev
```

### 生产打包

```
pnpm run build
```

### 格式化代码

```
pnpm run lint
or
npm run lint
```

### commit 信息 规范

```
git commit -m 'feat: 添加路由菜单'

build:	编译相关的修改，例如发布版本、对项目构建或者依赖的改动
chore:	其他修改, 比如改变构建流程、或者增加依赖库、工具等
ci:	持续集成修改
docs:	文档修改
feat:	新特性、新功能
fix:	修改bug
perf:	优化相关，比如提升性能、体验
refactor:	代码重构
revert:	回滚到上一个版本
style:	代码格式修改, 注意不是 css 修改
test:	测试用例修改
```

#### svg

```
  1. 下载svg文件，并存放在src/assets/svgs目录下(该项目指定在此目录，可以在vue.config.js文件中进行修改)

  2. 使用: i-sy-{{svgName}}
    <!-- icon 及 sy (前缀名)均可在vite.config.ts中进行修改，根据个人喜好设置 -->
    <i-sy-logo />
```

#### iconify([访问地址](https://icon-sets.iconify.design/))

```
  项目中引入的图集vite会自动进行安装，可直接使用

  1. 在官方网站找到想用的图标

  2. 复制图集及icon名, 例： clarity:accessibility-1-solid; 图集为clarity，图标名为accessibility-1-solid
  <i-clarity-accessibility-1-solid/>
```
