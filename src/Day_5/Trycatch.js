import React from 'react'
export default function Name(props)
{
    try
    {
        if(props.name==="Ajay")
        {
            throw new Error("Ajay name is not accepted");
        }
    }
    catch(err)
}