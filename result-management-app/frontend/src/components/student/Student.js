import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Button } from "antd";
import "antd/dist/antd.css";
import "../pages.css";
import { useNavigate } from "react-router-dom";

export default function Student(props) {
    const navigate = useNavigate();
    const [reg, setReg] = useState([]);
    const read = async (e) => {
        await props.readHandler(reg);
        navigate("/student/read");
    };

    return (
        <div className="parentBody">
            <div className="input">
                <Input
                    placeholder="Registration No."
                    allowClear
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    size="large"
                    onChange={(e) => setReg({ reg: e.target.value })}
                />
            </div>
            <Button type="primary" size="large" shape="round" onClick={read}>
                Display Result
            </Button>
        </div>
    );
}
