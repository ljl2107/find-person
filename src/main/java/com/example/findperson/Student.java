package com.example.findperson;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: 86150
 * @Date: 2023/9/19
 * @Description: com.example.findperson
 * 为了在检索时方便，就简单定义了一个类
 */
//
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    private String no; // 学号
    private String name; // 名称
    private String gender; // 性别
    private String className; // 班级
    private String phone; // 移动电话
    private String email; // 邮箱
}
