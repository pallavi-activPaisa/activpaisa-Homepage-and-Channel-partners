import React from 'react';

const InputField = ({
    label,
    type = "text",
    placeholder,
    value,
    defaultValue,
    onChange,
    error,
    helperText,
    disabled = false,
    className = "",
    ...props
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && (
                <label className="block text-xs font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <input
                type={type}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 transition-shadow ${error
                        ? 'border-red-300 focus:ring-red-100'
                        : 'border-gray-300 focus:ring-purple-500/20 focus:border-purple-500'
                    } ${disabled ? 'bg-gray-50 text-gray-400' : 'bg-white'}`}
                {...props}
            />
            {helperText && !error && (
                <p className="text-xs text-gray-500 mt-1">{helperText}</p>
            )}
            {error && (
                <p className="text-xs text-red-500 mt-1">{error}</p>
            )}
        </div>
    );
};

export default InputField;
