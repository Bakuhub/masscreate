import * as React from 'react';
import {ExcelTableHeader} from "../../../../types";

interface Props {
    header: ExcelTableHeader
}

export const ExcelTableHead: React.FunctionComponent<Props> = ({
                                                                   header
                                                               }) => {

    console.log('header rerender');
    return <>
        <thead>
        <tr>
            {header.map((n, index) => (
                <th key={index}>
                    <div className={"cell"}> {n}</div>
                </th>
            ))}
        </tr>
        </thead>
    </>
};
