import { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const COLORS_GENDER = ['#38bdf8', '#fca5a5'];
const COLORS_STATUS = ['#fdba74', '#5eead4'];

export default function Overview() {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    // Fetch employees data from API
    const fetchEmployees = async () => {
      const response = await fetch("http://localhost:8080/api/employees");
      const data = await response.json();
      setChartData(data);
    };
    fetchEmployees();
  }, []);

  // Create a new array to store the summarized data
  const dataGender = chartData.reduce((acc, current) => {
    const gender = current.CURRENT_GENDER.toLowerCase();
    const index = acc.findIndex(item => item.name === gender);
    
    if (index !== -1) {
      acc[index].value++;
    }
    else {
      acc.push({ name: current.CURRENT_GENDER, value: 1 });
    }
    return acc;
  }, []);

  const dataStatus = chartData.reduce((acc, current) => {
    const gender = current.EMPLOYMENT_STATUS.toLowerCase();
    const index = acc.findIndex(item => item.name === gender);
    
    if (index !== -1) {
      acc[index].value++;
    } 
    else {
      acc.push({ name: current.EMPLOYMENT_STATUS, value: 1 });
    }
    return acc;
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart width={1000} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={dataGender}
            cx={160}
            cy={160}
            outerRadius={100}
            fill="#818cf8"
            label
          >
            {
              dataGender.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS_GENDER[index % COLORS_GENDER.length]} />
              ))
            }
          </Pie>
          <Pie
            dataKey="value"
            data={dataStatus}
            cx={480}
            cy={160}
            innerRadius={50}
            outerRadius={100}
            fill="#a3e635"
            label
          >
            {
              dataStatus.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS_STATUS[index % COLORS_STATUS.length]} />
              ))
            }
          </Pie>
          <Tooltip />
        </PieChart>
    </ResponsiveContainer>
  );
}