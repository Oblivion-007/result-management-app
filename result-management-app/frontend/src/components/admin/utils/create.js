import react from "react";
import "antd/dist/antd.css";
import "../../pages.css";
import { Button, Form, Input } from "antd";

class Create extends react.Component {
    state = {
        reg: "",
        name: "",
        physics: "",
        chemistry: "",
        maths: "",
    };
    add = (e) => {
        console.log(e);
        if (this.state.reg === "" || this.state.name === "") {
            alert("Name and Registration fields are mandatory!");
            return;
        }
        this.props.addResultHandler(this.state);
        this.setState({
            reg: "",
            name: "",
            physics: "",
            chemistry: "",
            maths: "",
        });
    };
    render() {
        return (
            <div className="parentBody">
                <Form
                    name="basic"
                    // labelCol={{ span: 8 }}
                    // wrapperCol={{ span: 16 }}
                    onFinish={this.add}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Registration"
                        name="reg"
                        rules={[
                            {
                                required: true,
                                message: "Please input registration number!",
                            },
                        ]}
                    >
                        <Input
                            type="text"
                            name="reg"
                            placeholder="reg"
                            value={this.state.reg}
                            onChange={(e) =>
                                this.setState({ reg: e.target.value })
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Student Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input the student's name!",
                            },
                        ]}
                    >
                        <Input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={this.state.name}
                            onChange={(e) =>
                                this.setState({ name: e.target.value })
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Physics Marks"
                        name="physics"
                        rules={[
                            {
                                required: false,
                                message: "Please input marks in Physics!",
                            },
                        ]}
                    >
                        <Input
                            type="text"
                            name="physics"
                            placeholder="physics"
                            value={this.state.physics}
                            onChange={(e) =>
                                this.setState({ physics: e.target.value })
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Chemistry Marks"
                        name="chemistry"
                        rules={[
                            {
                                required: false,
                                message: "Please input marks in chemistry!",
                            },
                        ]}
                    >
                        <Input
                            type="text"
                            name="chemistry"
                            placeholder="chemistry"
                            value={this.state.chemistry}
                            onChange={(e) =>
                                this.setState({ chemistry: e.target.value })
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Maths Marks"
                        name="maths"
                        rules={[
                            {
                                required: false,
                                message: "Please input marks in Maths!",
                            },
                        ]}
                    >
                        <Input
                            type="text"
                            name="maths"
                            placeholder="maths"
                            value={this.state.maths}
                            onChange={(e) =>
                                this.setState({ maths: e.target.value })
                            }
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="submit" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default Create;
