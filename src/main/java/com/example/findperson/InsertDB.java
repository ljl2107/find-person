package com.example.findperson;

import com.example.findperson.util.DbUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.List;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: 86150
 * @Date: 2023/9/22
 * @Description: com.example.findperson
 */
public class InsertDB {

    public void addStud() throws Exception {
        xlsxData xlsxData =  new xlsxData();
        List<Map<String,Object>> contacts = xlsxData.getContacts();
        Connection connection = DbUtil.getCon();
        for(Map<String,Object> o: contacts){
            String sql = "INSERT INTO Student (sid, name, gender, class, mobile, email) VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setString(1, (String) o.get("id"));
            preparedStatement.setString(2, (String) o.get("name"));
            preparedStatement.setString(3, (String) o.get("gender"));
            preparedStatement.setString(4, (String) o.get("class"));
            preparedStatement.setString(5, (String) o.get("mobile"));
            preparedStatement.setString(6, (String) o.get("email"));
            preparedStatement.executeUpdate();
        }
        System.out.println("成功执行插入的sql语句！");

    }

    public static void main(String[] args) throws Exception {
        InsertDB insertDB = new InsertDB();
        insertDB.addStud();
    }
}
