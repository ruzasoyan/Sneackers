import React from 'react'
import { Link } from 'react-router';
import { Button } from '../button'

export const Empty = ({ imgUrl, title, text, isLink, buttonText, className }) => {
    return (
        <div className={className}>
            <img width={120} height={120} src={imgUrl} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
            {
                isLink ? <Link>{buttonText}</Link> : <Button>{buttonText}</Button>
            }
        </div>
    )
}
