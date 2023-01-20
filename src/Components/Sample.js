import React from 'react'
import { useQuery } from '@apollo/client';

export const Sample = ({ product }) => {
    const { data } = useQuery(product);

    console.log(data);

    return (
        <h1>List</h1>
    )
}
