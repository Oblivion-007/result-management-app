import React from "react";
import "antd/dist/antd.css";
import "../../pages.css";
import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reg: "",
        };
    }
    deleteFunc = (e) => {
        this.props.deleteHandler(this.state);
    };

    render() {
        return (
            <div className="parentBody">
                <div className="input">
                    <Input
                        placeholder="Registration No."
                        allowClear
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        size="large"
                        onChange={(e) => {
                            this.setState({ reg: e.target.value });
                        }}
                    />
                </div>
                <Button
                    type="primary"
                    size="large"
                    shape="round"
                    danger
                    onClick={this.deleteFunc}
                >
                    Delete Result
                </Button>
            </div>
        );
    }
}
export default Delete;
