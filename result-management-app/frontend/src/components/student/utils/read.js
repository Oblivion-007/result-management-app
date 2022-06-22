import React from "react";
import ResultCard from "./ResultCard";

import "antd/dist/antd.css";
import "../../pages.css";

export default function Read(props) {
    const result = props.result;
    // console.log("hello" + result);

    // const renderResult = () => {
    //     props.handleRead;
    // };

    // const renderResult = props.results.map((result) => {
    //     return <ResultCard result={result} key={result.id} />;
    // });
    // const renderResult = () => {
    //     return <ResultCard result={result} key={result.id} />;
    // };

    return (
        <div className="parentBody">
            {<ResultCard result={result} key={result.id} />}
        </div>
    );
}
