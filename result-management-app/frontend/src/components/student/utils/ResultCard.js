import React from "react";
import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "../../pages.css";

const ResultCard = (props) => {
    const { id, reg, name, physics, chemistry, maths } = props.result;
    return (
        <div className="site-card-border-less-wrapper avatar">
            <Avatar
                style={{
                    backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
                size="large"
            />

            <Card
                title={reg}
                bordered={false}
                style={{
                    width: 300,
                }}
            >
                <h2>Name: {name}</h2>
                <p>Physics: {physics}/100</p>
                <p>Chemistry: {chemistry}/100</p>
                <p>Maths: {maths}/100</p>
            </Card>
        </div>
    );
};

export default ResultCard;
