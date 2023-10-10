![Atakemaru_desktop.png](https://fastly.jsdelivr.net/gh/ljl2107/imageshack/Anime/Atakemaru_desktop.png)
![Static Badge](https://img.shields.io/badge/2.7.8_spring-boot-blue)
![Static Badge](https://img.shields.io/badge/5.9.2_antd-green)

# 开发计划
1. *[x] 目前已经完成了初步的功能实现
2. *[x] servlet的字符串拼接返回太折磨人，对于样式设计和未来开发不友好，计划剔除。
3. *[x] excel文档数据转为数据库数据。
4. *[x] 分页显示
5. *[x] 设置分页的页数5/10/15...
6. *[x] 前端开发尽快采用React antdesign等框架
7. *[x] 管理员功能
8. *[x] 管理员对数据的增删改查
9. *[x] 采用spring等框架，计划采用springboot，需要重构项目
10. *[ ] 实现上传照片文件功能 
11. *[ ] 个人身份验证模块，额，邮件？
12. *[ ] 进行图片的匹配，计划采用华为云的人脸识别接口或者是YOLOv5模型实现，但这个应该会放在最后。
13. *[ ] 多端运行，手机，微信，电脑，，，额，有点头疼
14. *[x] 前后端模块的建立

# J2EE 上机作业2023
## 第一次上机作业（2022）
实现检索通信录的功能。（“软院找人”）
阅读first.zip这个eclipse工程
添加输入页面，例如index.html

然后，用户可以输入学号，或者姓名（注意假定有重名），输入手机号码，或者邮件地址。在页面中定义**唯一 一个文本输入框**，类似百度。用户可以在这个文本 输入框输入**学号，姓名，手机号，邮件地址**。
无论用户输入上面的几项内容，请检索出符合条件的学生信息（可能包括多条查询记录）
将FinderServlet的doGet函数给出实现（上机检查作业的重点）

如果写完程序之后，可以进行测试，你可以添加一些手机号码，邮件地址等测试数据。
检索的结果包括学生的**学号，姓名，性别，班级，手机号码，邮件地址**。

请注意EXCEL文件中的姓名后如果有 * 符号，表示该同学是女生，请将这个数据处理掉，**显示学生姓名的时候不允许包括这个*符号。**

再次提醒，输出检索结果中，**姓名不允许出现*符号，输出结果包括性别 这个属性。**

允许数据属性重复（例如，重名）
检索条件要求包括学号，姓名，手机号码，邮箱地址，任选其一。
注意编码问题，不允许出现乱码。要求具有非常好的浏览器兼容性。

* [ ] 附加功能，查询结果返回给客户端，JSON格式的数据。不是HTML。



## 第二次上机作业

第二次作业
继续第一次作业，实现分页功能。

输入某个关键字，进行找人操作，当满足条件的联系人超过某个值的时候，要求分页显示，
用户可以选择不同的页号来进行查询。每个页面显示几条记录，要求在页面中有显示，
并且在页面中可以设置每页显示的记录数。设置完毕后，需要重新调整显示。

例如，每页显示的联系人数量是5个人。那么输入139，查询记录数小于等于5，那么不分页。
如果超过5，则要进行分页显示。

在页面中需要输出每页显示的记录数，同时还要有表单输入每页显示的记录数据，进而可以修改。
如果当前有数据记录输出，修改每页记录数之后，页面需要重新调整输出，比如输出新的第一页。

请使用servlet, jsp等JavaEE相关技术，前端开发技术不限。

必须支持每页显示的联系人设定，比如写在配置文件中，或者初始化参数中。



## 第三次上机作业

第三次作业
继续以前的作业。

要求使用MySQL数据库来存储软院的所有人员的联系信息。数据库自行设计。

还是要求分页，尽量使用MySQL提供的分页功能。

要求实现管理员功能，管理员可以对通信录进行增删改查功能。

管理员要求有身份验证。

必须使用数据源，连接池。

可以使用Spring框架或者其他框架，也可以不采用任何框架。


## 第四次上机作业
第四次作业
继续以前的作业。

请为联系人增加照片信息（暂时不验证照片的质量），假设每个人上传自己的照片都是符合要求的。
先假定照片的数量为每人一张正面照。

照片可以存储在数据库中，也可以保存为文件，如果保存成文件，需要考虑文件名重复问题。

要求实现个人身份验证，暂时不考虑手机验证码，因为没钱。身份验证逻辑自行设计。

个人登录之后，可以上传个人照片。（本次作业检查文件上传功能）

然后，系统需要提供按照片找人功能。

没有匹配图片的联系人，则显示查无此人。
如果有匹配图片的联系人，那么输出，也可以匹配多人，比如双胞胎。

和以前程序输入关键词不同，这次是输入图片。自己去查找开源的人脸识别软件。

该系统需要考虑扩展性，比如将来手机，微信等输入手段，系统最好是开放的。

ai

YOLOv5


# 运行方法
1. clone代码
2. 运行Tomcat服务器
3. 会自动访问的

# 注意事项
* 端口8022
* jdk1.8
* Tomcat 8.5.85




