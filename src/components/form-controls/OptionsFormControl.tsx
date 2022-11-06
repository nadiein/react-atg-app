import React, { FunctionComponent, Fragment, ReactElement } from 'react';


type SelectFormControlTypes = {
    options:any[],
    getSelectOnChange:any
}

const OptionsFormControl:FunctionComponent<SelectFormControlTypes> = (props):ReactElement => {

    return (
        <Fragment>
            <select onChange={e => props.getSelectOnChange(e)}>
                {
                    props.options ? props.options.map((option:any) => (
                        <option value={option['name']} key={option['id']}>{option['name']}</option>
                    )) : <option value="">...</option>
                }
            </select>
        </Fragment>
    )
}

export default OptionsFormControl;
