package com.example.findperson;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: 86150
 * @Date: 2023/9/16
 * @Description: com.example.findperson
 */
//@WebServlet(name = "finder", value = "/find")
public class GetAllServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // contact table
    private List<Map<String, Object>> contacts = new ArrayList<Map<String, Object>>();

    public void init() throws ServletException {
        try {
            String files = getInitParameter("contacts");
// 这一步是将文件名中间的中文逗号转化为西文逗号，但是好无语，多此一举？
            files = files.trim();
            files = files.replace('，', ',');
            String[] file_name_array = files.split(",");

            for (int i = 0; i < file_name_array.length; i++) {
                String file_name = file_name_array[i];
                file_name = file_name.trim();
                if (file_name.length() == 0) {
                    continue;
                }

                File file = new File(getServletContext().getRealPath("/WEB-INF/contacts/" + file_name));

                FileInputStream fis = new FileInputStream(file);

                Workbook book = null;
                try {
                    book = new XSSFWorkbook(fis);
                } catch (Exception ex) {
                    book = new HSSFWorkbook(fis);
                }

                Sheet sheetAt = book.getSheetAt(0);

                for (Row row : sheetAt) {
                    if (row.getRowNum() == 0) {
                        continue;
                    }

                    if (row == null) {
                        break;
                    }

                    Cell cell = row.getCell(0);

                    if (cell == null) {
                        break;
                    }

                    double no = row.getCell(0).getNumericCellValue();
                    String id = row.getCell(1).getStringCellValue();
                    String name = row.getCell(2).getStringCellValue();
                    String strClass = "";
                    String mobile = "";
                    String email = "";

                    cell = row.getCell(3);
                    if (cell != null) {
                        strClass = cell.getStringCellValue();
                    }

                    cell = row.getCell(4);
                    if (cell != null) {
                        cell.setCellType(CellType.STRING);
                        mobile = cell.getStringCellValue();
                    }

                    cell = row.getCell(5);
                    if (cell != null) {
                        cell.setCellType(CellType.STRING);
                        email = cell.getStringCellValue();
                    }

                    Map<String, Object> record = new HashMap<String, Object>();
                    record.put("id", id);
                    record.put("name", name);
                    record.put("gender", null);
                    record.put("class", strClass);
                    record.put("mobile", mobile);
                    record.put("email", email);

                    contacts.add(record);
                }

                book.close();
                fis.close();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        //const message = contacts;
        String res = "<html><body><table>\n";
        res = res+"<thead>\n" +
                "<tr>\n" +
                "<th>#no</th>\n" +
                "<th>学号</th>\n" +
                "<th>名称（包含性别）</th>\n" +
                "<th>班级</th>\n" +
                "<th>移动电话</th>\n" +
                "<th>邮箱</th>\n" +
                "</tr>\n" +
                "</thead>";

        res += "<tbody>\n";
        Integer no = 0;
        for (Map<String,Object> o:contacts) {
            res += "<tr>\n";
                res += "<td>"+no+++"</td>\n";
                res += "<td>"+o.get("id")+"</td>\n";
                res += "<td>"+o.get("name")+"</td>\n";
                res += "<td>"+o.get("class")+"</td>\n";
                if (o.get("mobile")==""){
                    res += "<td>"+"空白"+"</td>\n";
                }
                else
                    res += "<td>"+o.get("mobile")+"</td>\n";
                if (o.get("email")=="")
                    res += "<td>"+"空白"+"</td>\n";
                else
                    res += "<td>"+o.get("email")+"</td>\n";
        }
        res += "</tbody>\n";
//        Enumeration paramNames = request.getParameterNames();
//        System.out.println(paramNames);
//        while (paramNames.hasMoreElements()){
//            String paramName = (String) paramNames.nextElement();
//            res += "<tr><td>" + paramName + "</td>\n";
//            String[] paramValues = request.getParameterValues(paramName);
//            System.out.println(paramValues);
////
//            if (paramValues.length == 1){
//                String paramValue = paramValues[0];
//                if (paramValue.length() == 0){
//                    res += "<td><i>没有值</i></td>";
//                }
//                else {
//                    res += "<td>" + paramValue + "</td>";
//                }
//            }
//            else {
//                res += "<td><ul>";
//                for (int i = 0;i < paramValues.length; i++){
//                    res += "<li>" + paramValues[i];
//                }
//                res += "</ul></td>";
//            }
//            res += "</tr>";
//        }

        res = res + "\n</table>\n</body></html>";
        out.println(res);


//        response.sendRedirect("hello.html");
//        System.out.println("Contacts:");
//        System.out.println(contacts);
//        System.out.println(request.getParameterNames());
//        response.sendRedirect("finder.html");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("访问到了Finder的post");
        doGet(req, resp);
    }
}
