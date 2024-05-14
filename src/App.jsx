import { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import PayrollPage from "./pages/PayrollPage";
import NotificationPage from "./pages/NotificationPage";
import BenefitPage from "./pages/BenefitPage";
import AppRouter from "./routes";

function App() {
  return (
    // <Fragment>
    //   <Suspense fallback={<></>}>
    //     <Routes>
    //       <Route element={<Main></Main>}>
    //         <Route path="/" element={<HomePage></HomePage>}></Route>
    //       </Route>
    //       <Route element={<Main></Main>}>
    //         <Route
    //           path="/employee"
    //           element={<EmployeePage></EmployeePage>}
    //         ></Route>
    //       </Route>
    //       <Route element={<Main></Main>}>
    //         <Route
    //           path="/payroll"
    //           element={<PayrollPage></PayrollPage>}
    //         ></Route>
    //       </Route>
    //       <Route element={<Main></Main>}>
    //         <Route
    //           path="/notification"
    //           element={<NotificationPage></NotificationPage>}
    //         ></Route>
    //       </Route>
    //       <Route element={<Main></Main>}>
    //         <Route
    //           path="/benefit"
    //           element={<BenefitPage></BenefitPage>}
    //         ></Route>
    //       </Route>
    //     </Routes>
    //   </Suspense>
    // </Fragment>
    <>
      <AppRouter />
    </>
  );
}

export default App;
