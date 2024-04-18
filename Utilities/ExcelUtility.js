import excel from "exceljs"
class ExcelTestData{
   // Filepath='test\TESTDATA\Data.xlsx'

          async  ReadDatafromExcel(Filepath,SheetName,row,coloumn){
         
              const book=  new excel.Workbook()
             await book.xlsx.readFile(Filepath)
              const sheet=book.getWorksheet(SheetName)
               let data= sheet.getRow(row).getCell(coloumn).toString()
                             return data;
       
            }

            async writedataToExcel(Filepath,SheetName,row,coloumn,Text){

                  let   book1=new excel.Workbook()
                    await  book1.xlsx.readFile(Filepath)
                   let  sheet1 =book1.addWorksheet(SheetName)
                    let data= sheet1.getRow(row).getCell(coloumn).value=Text
                     await book1.xlsx.writeFile(Filepath)
                           return data;


            }
        }    
         
               
                
 
    export default new ExcelTestData()

            
  

