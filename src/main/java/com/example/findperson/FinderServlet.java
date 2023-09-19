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
import java.util.*;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: 86150
 * @Date: 2023/9/16
 * @Description: com.example.findperson
 */
//@WebServlet(name = "finder", value = "/find")
public class FinderServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static List<Map<String,Object>> retstudent = new ArrayList<Map<String,Object>>();
    // contact table
    private List<Map<String, Object>> contacts = new ArrayList<Map<String, Object>>();

    public void init() throws ServletException {
        try {
            String files = getInitParameter("contacts");

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
        String str = "<html><head>" +
                "<title>条件获取学生信息</title>" +
                "</head><body>\n";
        String strs = request.getParameter("queryparm");

        strs = strs.trim();
        strs = strs.replace('，', ',');
        String[] strs_arr = strs.split(",");

/**
 * record.put("id", id);
*                     record.put("name", name);
*                     record.put("gender", null);
*                     record.put("class", strClass);
*                     record.put("mobile", mobile);
*                     record.put("email", email);
 */
        for (Map<String,Object> students:contacts) {
            if (students.get("id").toString().equals(strs_arr[0])){
                retstudent.add(students);
            }
            if (students.get("name").equals(strs_arr[1])){
                retstudent.add(students);
            }
//            if (students.get("gender").equals(strs_arr[2])){
//                retstudent.add(students);
//            }
            if (students.get("class").equals(strs_arr[3])){
                retstudent.add(students);
            }
            if (students.get("mobile").equals(strs_arr[4])){
                retstudent.add(students);
            }
            if (students.get("email").equals(strs_arr[5])){
                retstudent.add(students);
            }
        }

        for(Object stu:retstudent) {
            str += "<h1>" + stu + "</h1>";
        }
        str += "\n</body></html>";
        out.write(str);
//        response.sendRedirect("finder.html");
    }

    public List<Map<String,Object>> queryInfo(){
        return new ArrayList<>();
    }



    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    }
}
