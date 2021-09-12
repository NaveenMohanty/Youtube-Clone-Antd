import { Result, Button } from "antd";
import { Layout } from "antd";
import history from "../utils/createHistory";
const { Content } = Layout;

const PageNotFound = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: "70px 30px",
        overflowY: "scroll",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => history.goBack()}>
            Back Home
          </Button>
        }
      />
    </Content>
  );
};

export default PageNotFound;
