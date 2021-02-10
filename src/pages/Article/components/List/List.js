import React, {useMemo, Fragment} from 'react';

export const List = ({list}) => {
    const {items, style} = list;
    const elements = useMemo(() => {
        return items.map((text) => (
            <li key={text}>{text}</li>
        ))
    }, [items])

    return (
        <Fragment>
            {style === 'ordered' ? (<ol>{elements}</ol>) : (<li>{elements}</li>)}
        </Fragment>
    )
}
