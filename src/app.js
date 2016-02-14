var excelService = require("./excel-service.js");

var workbook = new excelService.Workbook();
excelService.CreateAndAddSheet("foo", [ [ "a", "b" ], [ "c", "d" ] ], workbook);
excelService.Save(workbook, "/tmp/pascal.xlsx");
