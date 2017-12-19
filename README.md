# react-ssr-kit
a little perfect server render kit for react  (   比较完美的react服务端渲染脚手架  )

##创作背景

+   说实话很难受，react 服务端渲染找了很多开源方案，感觉都不符合自己的要求。next.js, react-starter-kit等等，感觉都差了那么点意思。
+   next.js其实是一套很好的方案，但是还是有些局限性，我个人不太喜欢使用黑盒和强约定。放弃最大的原因是，在它的初始化函数里没有让我找到同构的感觉，
很多服务端和客户端通用的model,req,persist等无法直接传递。我相信有hack可以解决，但是我无法迁就。
+   也看了许多其他现场的ssr方案，感觉都各有所长称不上完美。美丽的不温柔，温柔的不太美丽。
+   于是自己开发了一套个人认为还凑合的脚手架，react-ssr-kit。（一点美丽，一点温柔）
