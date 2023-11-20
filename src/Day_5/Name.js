import React from 'react'

export default function Name({studentName})
{
    if(studentName==="harish")
    {
        throw new Error("harish name is not acceptible")
    }
    return
    (
    <div>My name is {studentName}</div>
    )
}
