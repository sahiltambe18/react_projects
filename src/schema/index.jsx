import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const message = "Password must contain at least one symbol, one number, and one capital letter"

const basicSchema = yup.object().shape({
    email: yup.string().email("please enter valid email").required("email is required"),
    password: yup.string().min(6).matches(passwordRules,{message:message}).required("Required")
})


export default basicSchema;