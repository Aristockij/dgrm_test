import React, {useState} from 'react';
import {useField, Field} from "formik";
import MaskedInput from 'react-text-mask';

const FormItem = ({ inputError, requiredf, label, placeholder, ...props }) =>{

    const [field, meta, helpers] = useField(props);
    const [didFocus, setDidFocus] = useState(false);

    const handleFocus = () => setDidFocus(true);

    const showFeedback = (!!didFocus && field.value.trim().length > 2) || meta.touched;


    const handleBlur = () => {
        helpers.setTouched();
        if (field.value.trim().length === 0)
            setDidFocus(false);
    };

    return (
        <div className={`form--item  ${ requiredf &&  showFeedback ? (meta.error ? 'invalid' : 'valid') : ''} `} >

            <label htmlFor={props.id} className={`form--item-label ${didFocus || field.value.length > 0 ? 'focused': ''} `}>
                {label}
            </label>

            <div className='form--item-field'>
                {
                    inputError &&
                    meta.touched && meta.error &&
                    (
                        <div className='form-error-message-wrap'>
                            <div className='form-error-message'>{meta.error}</div>
                        </div>
                    )
                }
                {
                    props.mask ?
                        <Field name={field.name}>
                            {({field, value}) => (
                                <MaskedInput
                                    {...field}
                                    {...props}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                    className='textfield'
                                />
                            )}
                        </Field>:
                        props.as === 'textarea'?
                            <textarea
                                {...props}
                                {...field}
                                onFocus={handleFocus}
                                className='textfield'
                                onBlur={handleBlur}
                                placeholder={placeholder}
                            /> :
                                    <input
                                        {...props}
                                        {...field}
                                        onFocus={handleFocus}
                                        className='textfield'
                                        onBlur={handleBlur}
                                        placeholder={placeholder}
                                    />
                }
            </div>
        </div>
    );
}

export default FormItem;


