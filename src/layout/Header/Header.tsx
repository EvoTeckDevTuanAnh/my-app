import { Avatar, Badge, Dropdown, Menu, MenuProps } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { t } from 'i18next';
import { FC, useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';

import './header.scss';
interface HeaderProps { }
const HeaderComponent: FC<HeaderProps> = () => {
  const [current, setCurrent] = useState('home');
  const [headerClass, setHeaderClass] = useState("bottom")
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  useEffect(() => {
    // initiate the event handler
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 30) {
        setHeaderClass("header-when-scroll");
      } else {
        setHeaderClass("header-white");
      }
    });

    return () => { // return a cleanup function to unregister our function since it's going to run multiple times
      window.removeEventListener("scroll", (e) => {

      });
    };

  })
  return <Header id='header' className={'header-comp ' + headerClass} >
    <div className='logo'>
      <img src="./img/homePage/logoPage.svg" alt="" />
      Fresh air
    </div>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" >
      <Menu.Item key={"home"}>
        {t("header.home")}
      </Menu.Item>
      <Menu.Item key={"about"}>
        {t("header.about")}
      </Menu.Item>
      <Menu.Item key={"packages"}>
        {t("header.packages")}
      </Menu.Item>
      <Menu.Item key={"products"}>
        {t("header.products")}
      </Menu.Item>
      <Menu.Item key={"blog"}>
        {t("header.blog")}
      </Menu.Item>
      <Menu.Item key={"contact"}>
        {t("header.contact")}
      </Menu.Item>
    </Menu>
    <div className='login'>
      <Dropdown
        menu={{
          items: [
            {
              key: '1',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                  Account
                </a>
              ),
            },
            {
              key: '2',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                  Cart
                </a>
              ),
            },
            {
              key: '3',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                  Transaction details
                </a>
              ),
            },
            {
              key: '4',
              label: (
                <>promotion</>
              )
            }
          ],
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Badge count={1}>
            <Avatar shape="square" icon={<img src={"./img/homePage/my-avatar.jpg"} alt="avatar" />} />
          </Badge>
        </a>
      </Dropdown>
    </div>
  </Header>
};

export default withTranslation()(HeaderComponent);
