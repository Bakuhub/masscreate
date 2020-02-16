import React, {useEffect} from "react";
import {getRandomData} from "../utils";
import {ExcelTable} from "./ExcelTable";

const App = () => {
    // should get from server , only do this for test
    const initDataType = new Array(200).fill(1).map(getRandomData);
    const getChunkOfDataFromServer = () => new Array(250).fill(initDataType).map(() => {
        let temp = {};
        initDataType.forEach(key => {
            temp[key] = getRandomData();
        });
        return temp;
    });
    const data = getChunkOfDataFromServer();
    if (initDataType.length < 1) return <div> loading ............</div>;
    return (
        <ExcelTable data={data} header={initDataType}/>
    );
};
export default App;
