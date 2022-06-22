import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./pages.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="parentBody">
            <Button
                type="primary"
                onClick={() => {
                    navigate("/admin");
                }}
                size="large"
                shape="round"
            >
                Admin
            </Button>
            <Button
                type="primary"
                onClick={() => {
                    navigate("/student");
                }}
                size="large"
                shape="round"
            >
                Student
            </Button>
        </div>
    );
}
