package com.example.findperson;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import javax.servlet.ServletException;
import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: 86150
 * @Date: 2023/9/22
 * @Description: com.example.findperson
 */
public class xlsxData {
    private List<Map<String, Object>> contacts = new ArrayList<Map<String, Object>>();

    public xlsxData() {
        try {

            String[] file_name_array = {"1.xlsx","2.xlsx"};

            for (int i = 0; i < file_name_array.length; i++) {
                String file_name = file_name_array[i];
                file_name = file_name.trim();
                if (file_name.length() == 0) {
                    continue;
                }

                File file = new File("D:\\store\\存储箱\\大三\\j2ee\\上机\\第一次\\idea\\findperson\\src\\main\\webapp\\WEB-INF\\contacts\\" + file_name);

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
                    record.put("gender", "男");//我从未在此刻如此明白空值如此令人讨厌
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

    public void dooptimize(){
        for (Map<String,Object> o:contacts){
            if (o.get("name").toString().endsWith("*")){
                o.put("gender","女");
                o.put("name",o.get("name").toString().replace("*",""));
            }
        }

    }

    public List<Map<String,Object>> getContacts() throws ServletException {
        dooptimize();
        return contacts;
    }
}
