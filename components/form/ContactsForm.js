import React from 'react';
import FormItem from "./FormItem";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import Arrow from "../icons/Arrow";


const ContactsForm = () => {

    const phoneRegExp = /\+7-\(?([0-9]{3})\)?-([ .-]?)([0-9]{3})-([0-9]{2})-([0-9]{2})/
    const mailRegExp = /.+@.+\..+/i

    const validation = Yup.object().shape({
        phone: Yup.string()
            .required('Введите номер телефона')
            .matches(phoneRegExp, 'Неверный формат номера телефона.'),
        name: Yup.string()
            .required('Введите ваше имя'),
        mail: Yup.string()
            .required('Введите ваш e-mail')
            .matches(mailRegExp, 'Неверный формат e-mail'),
    });

    return (
        <Formik
            initialValues={{
                name: '',
                mail: '',
                activity: '',
                phone: '',
            }}
            validationSchema={validation}

            onSubmit={async (values, actions) => {
                     console.log(values)
            }}

        >
            {({errors,  values,isSubmitting, isValid, validateOnMount }) => (
                <Form>
                    <div className='contacts-form'>
                        <div className="contacts-form-item">
                            <FormItem
                                label="имя"
                                id="name"
                                name="name"
                                type="text"
                                requiredf={true}
                            />
                        </div>
                        <div className="contacts-form-item">
                            <FormItem
                                label="e-mail"
                                id="mail"
                                name="mail"
                                type="text"
                                requiredf={true}
                            />
                        </div>
                        <div className="contacts-form-item">
                            <FormItem
                                label="сфера деятельноти"
                                id="activity"
                                name="activity"
                                type="text"
                            />
                        </div>
                        <div className="contacts-form-item">
                            <FormItem
                                label="номер телефона"
                                id="phone"
                                name="phone"
                                type="text"
                                requiredf={true}
                                mask={["+", "7","-", /[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-',/\d/, /\d/]}
                            />
                        </div>
                        <div className={`contacts-form-btn ${isValid && values.name.length > 0 ? 'btn-valid' : ''}`}>
                            <button type='submit'>
                                <Arrow/>
                                <span>
                                    {isSubmitting ? 'Идет отправка...' : 'отправить'}
                                </span>
                            </button>
                        </div>

                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ContactsForm;