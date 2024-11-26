import {Link,Outlet} from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
export const DashboardPage = () => {
    return <MainLayout>
        <h3>Dashboard</h3>
        <p>Esta es la página de dashboard</p>
        <Link to="detalle">Detalle</Link>
        <br />
        <Link to="/dashboard">General</Link>
        <Outlet/>
        </MainLayout>
}