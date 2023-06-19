import { DataTable } from "./data-table";
import { columns, Attendance } from './columns';

 
async function getData(): Promise<Attendance[]> {
  return [
    {
      id: 1,
      name: 'Emmanuel',
      matricNo: '19CK025872',
      department: 'Electrical Engineering',
      date: '2015-01-01',
      time: '12:31'
    }
  ]
}

export default async function AttendancePage() {
  const data = getData();
  
    return (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />  
      </div>
    );
};

