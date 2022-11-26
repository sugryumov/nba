import { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu } from 'antd';
import { ROUTES } from '@/constants/routes';
import { Route } from '@/types/routes';

const Navigation: FC = () => {
  const { pathname } = useLocation();

  const items = Object.values(ROUTES).map((ROUTE: Route) => {
    return {
      key: ROUTE.PATH,
      label: (
        <Link key={ROUTE.PATH} to={ROUTE.PATH}>
          {ROUTE.NAME}
        </Link>
      ),
    };
  });

  return <Menu mode="horizontal" items={items} selectedKeys={[pathname]} />;
};

export default Navigation;
