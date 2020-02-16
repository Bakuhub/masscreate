export interface ExcelTableCell {
    [key:string]:string
}

export type ExcelTableHeader = Array<keyof ExcelTableCell>

