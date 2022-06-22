import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import "../pages.css";
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const navigate = useNavigate();
    return (
        <div className="parentBody">
            <Button
                type="primary"
                size="large"
                shape="round"
                onClick={() => {
                    navigate("/admin/create");
                }}
            >
                Create Result
            </Button>
            <Button
                type="primary"
                size="large"
                shape="round"
                onClick={() => {
                    navigate("/admin/update");
                }}
            >
                Update Result
            </Button>
            <Button
                type="primary"
                size="large"
                shape="round"
                danger
                onClick={() => {
                    navigate("/admin/delete");
                }}
            >
                Delete Result
            </Button>
        </div>
    );
}
