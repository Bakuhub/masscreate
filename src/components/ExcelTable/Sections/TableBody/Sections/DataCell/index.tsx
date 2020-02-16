import * as React from "react";
import {memo, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

interface Props {
    value: string
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
    })
);
export const TableCell: React.FunctionComponent<Props> = memo(props => {
    const classes = useStyles();
    const [value, setValue] = useState(() => props.value);
    const [isEditable, setIsEditable] = useState(false);
    useEffect(() => {
        console.log(" save changed value to db");
    }, [value]);
    const handleOnKeyDown = e => {
        if (e.key === 'Enter') {
            setIsEditable(false)
        }
    };
    return (
        <td>
            <div className={classes.root} onDoubleClick={() => {
                setIsEditable(prev => !prev)
            }}>

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
