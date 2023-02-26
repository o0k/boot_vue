package cn.neat.project.excel;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * @author 张澎_9970
 * @date 2023/2/11 16:12 星期六
 * @desc
 */
public class ExcelUtil {

    public static void main(String[] args) throws IOException {
        // 创建工作簿, 类似于创建Excel文件
        XSSFWorkbook xssfWorkbook = new XSSFWorkbook();

        // 创建工作表, 类似于创建Excel文件中的sheet
        XSSFSheet xssfSheet = xssfWorkbook.createSheet("sheet1");

        // 创建行, 类似于创建Excel文件中的行
        XSSFRow xssfRow = xssfSheet.createRow(0);

        // 创建单元格, 类似于创建Excel文件中的单元格
        xssfRow.createCell(0).setCellValue("姓名");
        xssfRow.createCell(1).setCellValue("年龄");
        xssfRow.createCell(2).setCellValue("性别");
        xssfRow.createCell(3).setCellValue("爱好");
        xssfRow.createCell(4).setCellValue("地址");

        // 保存Excel文件
        FileOutputStream fileOutputStream = new FileOutputStream("D:\\excel\\test.xlsx");
        xssfWorkbook.write(fileOutputStream);

        // 关闭流
        fileOutputStream.close();
        xssfWorkbook.close();
    }

    // 读取excel
    public static void readExcel() {


    }
}
