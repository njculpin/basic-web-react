import React from 'react'

export const Input = (props) => (
    <div className={`flex flex-col my-3 w-full ${props.containerStyle}`}>
        <p className="font-lato font-semibold text-lg mb-3">{props.label}</p>
        <input
            key={props.key}
            onChange={(e) => props.onChange(props.field, e)}
            value={props.value}
            style={{ WebkitAppearance: 'none', outline: 'none' }}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder={props.placeholder}
            type={props.type ? "password" : "text"}
        />
        {props.errors && <p className="font-lato font-regular text-red mt-2 text-sm">{props.errors[0]}</p>}
    </div>
)
