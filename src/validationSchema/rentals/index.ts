import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  tool_id: yup.string().nullable(),
  outlet_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
});
