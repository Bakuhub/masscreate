import * as React from "react";
import {memo, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import classNames from 'classnames';

interface Props {
    value: string
    columnIndex: number

}

const useStyles = makeStyles(theme => ({
        root: {

            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect: 'none',
            UserSelect: 'none',
            padding: "12px",
            border: "1px solid black"
        },
        selected: {
            border: "1px solid blue"
        }
    })
);
export const TableCell: React.FunctionComponent<Props> = memo(props => {
    const classes = useStyles();
    const [value, setValue] = useState(() => props.value);
    const [isEditable, setIsEditable] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    useEffect(() => {
        console.log(" save changed value to db");
    }, [value]);
    const handleOnKeyDown = e => {
        if (e.key === 'Enter') {
            setIsEditable(false)
        }
    };
    const handleOnMouseDown = () => {
        setIsSelected(prev => !prev)
    };
    return (
        <td>
            <div
                onMouseDown={handleOnMouseDown}
                className={classNames(classes.root, isSelected ? classes.selected : null)}
                onDoubleClick={() => {
                    setIsEditable(prev => !prev)
                }}
            >

                {
                    isEditable ? <input
                        value={value}
                        autoFocus
                        onKeyDown={handleOnKeyDown}
                        onBlur={() => setIsEditable(false)}
                        onChange={e => setValue(e.target.value)}
                    /> : value
                }
            </div>
        </td>
    );
});
