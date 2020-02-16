import * as React from 'react';
import {ExcelTableHead} from "./Sections/TableHeader";
import {ExcelTableBody} from "./Sections/TableBody";
import {ExcelTableCell} from "../../types";

interface Props {
    data: Array<ExcelTableCell>
    header: Array<string>
}

export const ExcelTable: React.FunctionComponent<Props> = ({
                                                               header, data
                                                           }) => {
    return <table>
        <ExcelTableHead header={header}/>
        <ExcelTableBody data={data} header={header}/>
    </table>
};
