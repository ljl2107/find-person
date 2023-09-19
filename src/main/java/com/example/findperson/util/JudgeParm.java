package com.example.findperson.util;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: 86150
 * @Date: 2023/9/19
 * @Description: com.example.findperson.util
 */
public class JudgeParm {
//    0-5 决定传入的参数是什么，1则说明有，
    public Integer[] judgeParm;
    public static boolean isName(String item) {
        // 假设姓名只包含中文或英文字符
        return item.matches("^[\\u4e00-\\u9fa5a-zA-Z]+$");
    }

    public static boolean isStudentId(String item) {
        // 假设学号是一个长度为10的数字字符串
        return item.matches("\\d{9,11}");
    }

    public static boolean isClassId(String item) {
        // 假设班级是一个长度为6的数字字符串
        return item.matches("[a-zA-Z]{2}\\d{4}");
    }

    public static boolean isModile(String item){
// 手机号
        return item.matches("/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$/");
    }
    public static boolean isMail(String item){
//        邮箱
        return item.matches("/^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/");
    }

}
