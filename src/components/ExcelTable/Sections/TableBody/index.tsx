import * as React from 'react';
import {useState} from 'react';
import {ExcelTableCell, ExcelTableHeader} from "../../../../types";
import {TableCell} from "./Sections/DataCell";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {}
}));

interface Props {
    data: Array<ExcelTableCell>
    header: ExcelTableHeader
}

export const ExcelTableBody: React.FunctionComponent<Props> = ({
                                                                   data,
                                                                   header
                                                               }) => {
    console.log('body rerender');
    return <tbody>
    {data.map((n, index) => (
        <tr key={index}>
            {header.map((key, valueKey) => (
                <TableCell key={valueKey} value={n[key]}/>
            ))}
        </tr>
    ))}
    </tbody>
};