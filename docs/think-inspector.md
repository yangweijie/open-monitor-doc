---
navbar:true
---

# think-inspector

## 仓库

https://github.com/yangweijie/think-inspector

## 安装

`composer require yangweijie/think-inspector -vvv`

## 使用

### 配置

文件位于 ThinkPHP 项目 config 里的 inspector.php 。

有 enable、key、max_items、env、single、url

### 在 inspector 中

只要 url 不设置 默认向 app.inspector.dev 上报

且 key 要设置为 其网站中创建的项目的key  32位

### 在 open-monitor 中

key 为 open-monitor 中创建项目展示的key 

### 共同参数

#### enable 布尔 是否启用，可以在各种中间件里 临时关闭

#### max_items 每个监听会话里 允许添加的最大片段数。 超过 添加不进去

#### env 目前没用到 计划 用于区分同个项目 不同环境的

#### single  是否区分 不同url 命令 true 意味着 启动监听时的path 是动态独立 ， 然后 monitor 面版 会通过这些path 去区分 不同的监听 分组


### 更多



参考 think-inspector 库的readme

主要 有 记录片段（分开标记和闭包）、设置会话的上下文context、监听命令行和异常