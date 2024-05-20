import { Download } from "lucide-react";
import { Button } from "../ui/button";
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const ExcelExport = ({ data, fileName }) => {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});
    saveAs(blob, `${fileName}.xlsx`);
  };
  return (
    <Button onClick={exportToExcel}>
      <Download className="mr-2 h-4 w-4" /> Export
    </Button>
  )
}

export default ExcelExport;