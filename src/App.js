import { Layout, Menu, Breadcrumb  } from 'antd';
import 'antd/dist/antd.css'; 
import { Typography } from 'antd';
import './App.css'
import { Avatar } from 'antd';
// import { Menu, Switch } from 'antd';
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
      <Layout>
      <Header className='header'  >
      <Title style={{color:'white'}} level={3}>پروفایل من</Title>
      <Avatar  style={ {float:'left' , marginTop:-36}} src={'./tiger.png'} />
      </Header>
      <Layout>
        <Sider style={{backgroundColor:'white'}}>
          <Menu DefaultSelectedKey={['dashboard']} mode='inline'>
            
            <Menu.Item key='dashboard'>
              داشبورد
            </Menu.Item>
            
            <SubMenu title='سفارشات' key='sub1'>
              <Menu.ItemGroup key='orders'>
                <Menu.Item>
                سبد خرید
                </Menu.Item>
                <Menu.Item >
                سابقه خرید من
                </Menu.Item>
                <Menu.Item>
                  پیگیری سفارشات                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item>
                پشتیبانی
                </Menu.Item>
          </Menu>
        </Sider>
        <Content className='cn' style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>داشبورد</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        سلام.. به صفحه من خوش آمدید
      </div>
    </Content>     
     </Layout>
     <Footer style={{ textAlign: 'center' }}>حق نشر برای گروه ... محفوظ است
</Footer>
    </Layout>
    </div>
  );
}

export default App;
