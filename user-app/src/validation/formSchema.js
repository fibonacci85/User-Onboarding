import * as yup from 'yup'


export default yup.object().shape({
  name: yup.string()
    .required('Name is required')
    .min(2, 'minimum 2 characters'),
  email: yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup.string()
    .required('Please provide a valid password')
    .min(6, 'minimum 6 characters'),
  checkbox: yup.boolean()
    .oneOf([true], 'YOU MUST AGREE')
    
})
