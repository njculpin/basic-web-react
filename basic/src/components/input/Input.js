import React from 'react'

export const Input = (props) => (
    <div className={`flex flex-col my-3 w-full ${props.containerStyle}`}>
        <p className="font-lato font-semibold text-lg mb-3">{props.label}</p>
        <input
            key={props.key}
            onChange={(e) => props.onChange(props.field, e)}
            value={props.value}
            style={{ WebkitAppearance: 'none', outline: 'none' }}
            className="font-lato bg-gray-100 rounded p-3 py-4 w-full"
            placeholder={props.placeholder}
            type={props.type ? "password" : "text"}
        />
        {props.errors && <p className="font-lato font-regular text-red mt-2 text-sm">{props.errors[0]}</p>}
    </div>
)
