import axios from "axios";

export default async function getPersonalData(employeeId) {
  const response = await axios.get(`http://localhost:8080/api/employees/${employeeId}`);
  return response.data;
}