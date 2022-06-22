import react, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Home from "./components/Home";
import Student from "./components/student/Student";
import Error from "./components/Error";
import Create from "./components/admin/utils/create";
import Update from "./components/admin/utils/update";
import Delete from "./components/admin/utils/delete";
import Read from "./components/student/utils/read";
import api from "./api/results";

function App() {
    const { v4: uuidv4 } = require("uuid");
    const [results, setResults] = useState([]);
    const [readResult, setReadResult] = useState([]);

    const readHandler = (inputReg) => {
        const reg = inputReg.reg;
        console.log(reg);

        results.map((result) => {
            if (result.reg === reg) {
                setReadResult({ ...result });
            }
            return result;
        });
        console.log(readResult);
    };

    const updateResultHandler = async (updateResult) => {
        const reg = updateResult.reg;
        var id = -1;
        results.map((result) => {
            if (result.reg === reg) {
                id = result.id;
            }
            return result;
        });
        console.log(id);
        const response = await api.put(`/result/${id}`, updateResult);
        setResults(
            results.map((result) => {
                return result.id === id ? { ...response.data } : result;
            })
        );
        // setResults(newResults);
    };

    const deleteHandler = async (deleteResult) => {
        const reg = deleteResult.reg;
        var id = -1;
        const newResults = results.filter((result) => {
            if (result.reg === reg) {
                id = result.id;
            }
            return result.reg !== reg;
        });
        await api.delete(`/result/${id}`);
        setResults(newResults);
    };

    const addResultHandler = async (result) => {
        const request = {
            id: uuidv4(),
            ...result,
        };
        const response = await api.post("./result", request);
        setResults([...results, response.data]);
    };
    const retriveResults = async () => {
        const response = await api.get("./result");
        return response.data;
    };

    useEffect(() => {
        const getAllResults = async () => {
            const allResults = await retriveResults();
            if (allResults) setResults(allResults);
        };
        getAllResults();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route
                    path="/student"
                    element={<Student readHandler={readHandler} />}
                />
                <Route
                    path="/admin/create"
                    element={<Create addResultHandler={addResultHandler} />}
                />
                <Route
                    path="/admin/update"
                    element={
                        <Update
                            updateResultHandler={updateResultHandler}
                            results={results}
                        />
                    }
                />
                <Route
                    path="/admin/delete"
                    element={
                        <Delete
                            deleteHandler={deleteHandler}
                            results={results}
                        />
                    }
                />
                <Route
                    path="/student/read"
                    element={<Read result={readResult} />}
                />
                <Route path="/*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
