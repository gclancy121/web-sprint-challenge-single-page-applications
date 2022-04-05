import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
  .string()
  .trim()
  .required("name required")
  .min(2, 'name must be at least 2 characters'),
  size: yup
  .string()
  .trim(),
  toppings: yup
  .string(),
  sausage: yup.boolean(),
  pepperoni: yup.boolean(),
  ham: yup.boolean(),
  bacon: yup.boolean(),
  specialText: yup
  .string()
})

export default formSchema;