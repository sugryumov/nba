import { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu } from 'antd';
import { ROUTES } from '@/constants/routes';
import { Route } from '@/types/routes';

import styles from './index.module.css';

const AppMenu: FC = () => {
  const { pathname } = useLocation();

  const items = Object.values(ROUTES)
    .filter(ROUTE => ROUTE.IS_MENU_ITEM)
    .map((ROUTE: Route) => ({
      key: ROUTE.PATH,
      label: (
        <Link key={ROUTE.PATH} to={ROUTE.PATH}>
          {ROUTE.NAME}
        </Link>
      ),
    }));

  return (
    <Menu
      mode="horizontal"
      items={items}
      selectedKeys={[pathname]}
      className={styles.menu}
    />
  );
};

export default AppMenu;
