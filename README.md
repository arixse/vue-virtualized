# Vue-virtulized
> 为解决显示单列大数据量的dom而生的Vue组件 :airplane:

## Feature
[x] 动态渲染dom,节约浏览器资源 💻

## Quick start
```sh
git clone ...
yarn
yarn start
```
## Useage
```sh
#install
yarn add vue-virtulized
```

## Props

| 属性名称           | 默认值 |  类型     | 说明              |
|--------------------|--------|----------|------------------|
| containerHeight     |0       |   Number       |列表视野高度 |
| itemHeight           |0      |   Number       |每一个item的高度 |
|  records            |[]      |   Array        |    列表全部数据 |