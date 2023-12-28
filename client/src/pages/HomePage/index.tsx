import { useState } from "react";
import { Menu, Layout, Typography, MenuProps } from "antd";
import { items } from "pages/HomePage/lib";
import { styles } from "pages/HomePage/styles";

const { Text, Title } = Typography;
const { Header, Content } = Layout;

const HomePage = () => {
  const [current, setCurrent] = useState<string>("home");

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  }

  return (
    <Layout>
      <Header style={styles.header}>
        <Title level={4} style={styles.title}>Start<Text style={styles.titleText} mark>Ease</Text></Title>
        <Menu
          mode="horizontal"
          theme="dark"
          items={items}
          style={styles.menu}
          onClick={handleMenuClick}
          defaultSelectedKeys={[current]}
        />
      </Header>
      <Content></Content>
    </Layout>
  );
};

export default HomePage;
