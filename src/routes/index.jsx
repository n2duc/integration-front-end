import DashboardLayout from "@/components/layout/dashboard-layout";
import NotFound from "@/pages/not-found";
import { Suspense, lazy } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

const DashboardPage = lazy(() => import('@/pages/dashboard'));
const EmployeesPage = lazy(() => import('@/pages/employees'));
const PayrollPage = lazy(() => import('@/pages/payroll'));
const NotificationsPage = lazy(() => import('@/pages/notifications'));
const BenefitsPage = lazy(() => import('@/pages/benefits'));
const VacationsPage = lazy(() => import('@/pages/vacations'));

export default function AppRouter() {
  const dashboardRoutes = [
    {
      path: '/',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: <DashboardPage />,
          index: true
        },
        {
          path: 'employees',
          element: <EmployeesPage />
        },
        {
          path: 'payroll',
          element: <PayrollPage />
        },
        {
          path: 'notifications',
          element: <NotificationsPage />
        },
        {
          path: 'benefits',
          element: <BenefitsPage />
        },
        {
          path: 'vacations',
          element: <VacationsPage />
        }
      ]
    }
  ];

  const publicRoutes = [
    {
      path: '/404',
      element: <NotFound  />
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ];

  const routes = useRoutes([...dashboardRoutes, ...publicRoutes]);

  return routes;
}