package com.example.findperson.util;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
* @Description: DbUtil
* @Param:
* @return:
* @Author: 86150
* @Date: 2023/7/4
 * 数据库工具 请注意使用前修改自己的用户名和密码
*/
public class DbUtil {
    private static final String  dburl="jdbc:mysql://localhost:3306/findperson?characterEncoding=utf8&useSSL=false&useOldAliasMetadataBehavior=true&allowPublicKeyRetrieval=true";//数据库连接地址
    private static  final String dbUserName="root";//用户名
    private static final String dbpassword="20030324@Ljl";//密码
    private static final String jdbcName="com.mysql.jdbc.Driver";//驱动名称
    private static Connection conn =null;

    static{
        try {
            //1.加载驱动程序
            Class.forName("com.mysql.cj.jdbc.Driver");
            //2. 获得数据库连接
            conn = DriverManager.getConnection(dburl, dbUserName, dbpassword);
        } catch (ClassNotFoundException e) {
            System.out.println("数据库类未发现");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("sql错误");
            e.printStackTrace();
        }
    }

    /**
     * 获取数据库连接
     * @return
     */
    public static Connection getCon() {
        return conn;
    }


}
