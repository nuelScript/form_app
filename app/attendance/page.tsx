import { GetServerSideProps } from "next";

interface AttendanceProps {
    id: number;
    date: string;
    present: boolean;
    time: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
    const attendance: AttendanceProps[] = [];
    return {
        props: {
            attendance,
        },
    };
}

const AttendancePage: React.FC<{ attendance: AttendanceProps[] }> = ({ attendance }) => {
    return (
      <div>
        <div className="w-full h-full flex items-center justify-center">
          <table className="table-auto">
            <thead>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AttendancePage;