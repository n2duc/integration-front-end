import React, { Fragment, useEffect, useState } from "react";
import TitleContent from "@/components/titleContent/TitleContent";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@/config";
import ModalEmployee from "@/modal/ModalEmployee";
import useDebounce from "@/hook/useDebounce";
import PaginationGlobal from "@/components/pagination/PaginationGlobal";
import ModalCreateEmployee from "@/modal/ModalCreateEmployee";
import TableEmployee from "@/components/table/TableEmployee";

const EmployeePage = () => {
  const [id, setId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(tmdbAPI.getAPI("employee"));
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue); // Update filter state

    // Construct the URL based on the filter value
    const filteredUrl = `${tmdbAPI.getAPI("employee")}?filter=${filterValue}`;

    // Set the filtered URL to fetch data
    setUrl(filteredUrl);
  };
  const { data, error } = useSWR(url, fetcher);
  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getAPI("employee"));
    }
  }, [filterDebounce]);
  const employeeData = data || [];

  // console.log(employeeData);

  // handle remove employee
  const [newEmployee, setNewEmployee] = useState([]);
  const handleRemoveEmployee = async (id) => {
    try {
      const updatedEmployee = employeeData.filter((emp) => emp.id !== id);
      // update new employee
      setNewEmployee(updatedEmployee);
    } catch (error) {
      console.error("Error removing employee:", error);
    }
  };
  // console.log(newEmployee);

  // handle next page
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(5);
  const indexOfLastEmployee = currentPage * newsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - newsPerPage;
  const currentEmployees = employeeData.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  // console.log(currentEmployees);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Fragment>
      <div className="py-7 px-10">
        <div className="flex justify-between">
          <TitleContent
            mainChildren={"Employee Management"}
            minorCirldren={"Memo / Employee"}
          ></TitleContent>
          <div className="">
            <button
              className="py-2 px-4 mr-9 bg-[#e3e3e3] rounded-lg font-medium"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              Create
            </button>
            <select className="font-bold bg-[#F5F5F5] w-[150px] py-2 px-2 rounded-lg">
              <option value="" hidden>
                Sort
              </option>{" "}
            </select>
            <select className="font-bold bg-[#F5F5F5] w-[150px] py-2 px-2 ml-8 rounded-lg">
              <option value="" hidden>
                Filter
              </option>{" "}
            </select>
          </div>
        </div>
        <TableEmployee
          currentEmployees={currentEmployees}
          currentPage={currentPage}
          newsPerPage={newsPerPage}
          setOpenModal={setOpenModal}
          setId={setId}
        ></TableEmployee>
        <PaginationGlobal
          employee={employeeData || []}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          handleRemoveEmployee={handleRemoveEmployee}
        ></PaginationGlobal>
      </div>
      <ModalEmployee
        open={openModal}
        handleClose={() => {
          setOpenModal(false);
        }}
        item={employeeData.find((emp) => emp.id === id)}
      ></ModalEmployee>
      <ModalCreateEmployee
        open={openCreateModal}
        handleClose={() => {
          setOpenCreateModal(false);
        }}
      ></ModalCreateEmployee>
    </Fragment>
  );
};

export default EmployeePage;
