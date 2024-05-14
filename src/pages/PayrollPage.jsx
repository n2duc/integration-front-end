import React, { Fragment, useState } from "react";
import TitleContent from "@/components/titleContent/TitleContent";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@/config";
import ModalEmployee from "@/modal/ModalEmployee";
import PaginationGlobal from "@/components/pagination/PaginationGlobal";
import ModalCreateEmployee from "@/modal/ModalCreateEmployee";
import TablePayroll from "@/components/table/TablePayroll";
import iconMenu from "../img/menu.svg";

const PayrollPage = ({}) => {
  const [id, setId] = useState(0);
  // console.log(id);
  const [openModal, setOpenModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const { data } = useSWR(tmdbAPI.getAPI("payroll"), fetcher);
  // console.log(data);
  const employee = data || [];
  // handle next page
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(5);
  const indexOfLastEmployee = currentPage * newsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - newsPerPage;
  const currentEmployees = employee.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Fragment>
      <div className="py-7 px-10">
        <div className="flex justify-between">
          <TitleContent
            mainChildren={"Payroll"}
            minorCirldren={"Memo / Payroll"}
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
        <div className="pt-10 pb-10">
          <TablePayroll
            currentEmployees={currentEmployees}
            currentPage={currentPage}
            newsPerPage={newsPerPage}
            setOpenModal={setOpenModal}
            setId={setId}
          ></TablePayroll>
        </div>
        <PaginationGlobal
          employee={employee}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        ></PaginationGlobal>
      </div>
      <ModalEmployee
        open={openModal}
        handleClose={() => {
          setOpenModal(false);
        }}
        item={employee.find((emp) => emp.id === id)}
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

export default PayrollPage;
