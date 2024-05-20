import { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, PieChart, Pie, Legend, Tooltip } from 'recharts';

const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Feb',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Apr',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'May',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Jun',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Jul',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Aug',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Sep',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Oct',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Nov',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Dec',
    total: Math.floor(Math.random() * 5000) + 1000
  }
];

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
          />
          <Pie
            dataKey="value"
            data={dataStatus}
            cx={480}
            cy={160}
            innerRadius={50}
            outerRadius={100}
            fill="#a3e635"
          />
          <Tooltip />
        </PieChart>
    </ResponsiveContainer>
  );
}