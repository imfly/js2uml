
# 说明
本项目计划整合进**正在维护的** [DDN区块链] <https://github.com/ddnlink/ddn> 项目，作为区块链的一个Dapp，喜欢区块链的小伙伴，欢迎关注收藏。

**配套书籍和视频**: [《Nodejs区块链开发2》](https://github.com/imfly/blockchain-on-nodejs), [旧版电子书](https://github.com/imfly/bitcoin-on-nodejs), [旧版纸质书籍](https://item.jd.com/12206128.html), [旧版代码](https://github.com/ebookcoin/ebookcoin)

# 关于js2uml（About）
A CLI for converting JS to UML class diagrams.

通过js文件产生Uml类图的命令行工具。详细开发文档：<https://github.com/imfly/bitcoin-on-nodejs/blob/master/4-开发实践/7-方法论/6-轻松从Js文件生成UML类图.md>

备注：**UML是类关系图，对面向对象编程的语言或代码，可以方便地查看类之间的关系。因为js代码特别是灵活，如果你的代码是非常简单的函数式文件，而非类文件，使用本工具没有价值，也无法生成你需要的东西**。

[《Nodejs区块链开发》][] 系列文章里用到的大量js类图，都来自于这个小工具。比如：

![dapps.png](./test/dapps.png)

## 说明(Description)

[《Nodejs区块链开发》][] 系列文章里用到了大量的js类图，有的小伙伴很奇怪怎么来的。说实话，一开始是我个人手工整理的，后来感觉在浪费生命了，就写了正则表达式版的（v0.1.0），因为不够灵活，不适合其他场合，就没有单独放出来。现在引入了抽象语法树，顺带使用函数式编程进行了重构。

本工具，主要使用了如下技能：

* **抽象语法树（AST）的处理**。抽象语法树有很多用途，大部分人可能很少直接在代码里使用，但是几乎每个人也都在用，比如：编辑器的自动提示、自动完成等功能，使用Nodejs的小伙伴，最后都要对代码进行混淆、压缩等处理，那些工具也都要用到；
* **函数式编程**。原来的版本（V0.1.0)，是完全面向对象的编程方式，也没有使用AST，所以代码长，功能有限。这个版本，进行了优化，使用函数式编程，大大缩减了代码，可以直接导出.png/.svg/.pu等各种格式;
* **学习plantuml**。这是使用代码处理Uml的最好方式，直接使用dot语言（生成的.pu文件就是），像编写程序一样画Uml图，真的只有程序猿才能体会的畅快。

## 安装（Install)

```
$ npm install -g js2uml
```

或者

```
$ yarn global add js2uml
```

**注意（Note)**: 如果想直接导出图片格式，如：png,svg等，需要首先安装 [Graphviz][] ，在win系统里，可能还要专门设置环境变量。

## 使用（Usage)

**注意（Note)**:输入输出文件是一定要提供的，不然会提示错误。

```
$ js2uml -s ./test/dapps.js -o ./test/dapps.png
```

输出文件后缀格式支持`.png`、`.svg`等[Graphviz][]支持的格式，以及dot格式的`.pu`或`.puml`文件，直接在文件名里提供就是了。

您还可以对生成的图片标题、背景颜色、版本信息等进行定制，详细信息，请查看帮助：

```
$ js2uml --help
```

## 计划（Todo）

* 添加测试；
* 处理变量；
* 优化布局；

## 关于(About)

DDN区块链：面向企业的区块链系统

网址：<https://github.com/ddnlink/ddn>

## 协议（License)

MIT License 2016 @imfly

[《Nodejs区块链开发》]: https://github.com/imfly/bitcoin-on-nodejs
[Graphviz]: http://www.graphviz.org/
