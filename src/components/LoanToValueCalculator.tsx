import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { calculateLoanToValue } from "@/services/calculateLoanToValue";
import * as yup from "yup";

// Client side form validation schema using Yup
const loanToValueFormSchema = yup.object({
  depositValue: yup
    .number()
    .min(1, "Deposit value must be a greater than or equal to 1")
    .typeError("Deposit value must be a number")
    .required("Deposit value is required"),
  purchasePrice: yup
    .number()
    .min(1, "Purchase price must be a greater than or equal to 1")
    .typeError("Purchase price must be a number")
    .required("Purchase price is required"),
});

type LoanToValueForm = yup.InferType<typeof loanToValueFormSchema>;

/**
 * This is the main LoanToValue Component, it renders the component along with the form
 * @return {JSX.Element}
 */
export const LoanToValueCalculator: React.FC = () => {
  // local state for the returned loan to value percentage result
  const [loanValue, setLoanValue] = useState<string>("0%");

  const initialValues: LoanToValueForm = {
    depositValue: 0,
    purchasePrice: 0,
  };

  return (
    <article>
      <h1>Loan To Value Calculator</h1>
      <p>
        Input your <strong>deposit value</strong> and{" "}
        <strong>purchase price</strong> to get the{" "}
        <strong>loan to value</strong> percentage.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={loanToValueFormSchema}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(true);
          const calculatedLoanValue = await calculateLoanToValue(values); // gets the form values and post to the service
          setLoanValue(calculatedLoanValue);
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <h3 id="loanValue">{isSubmitting ? "Loading..." : loanValue}</h3>
            <label htmlFor="firstName">Deposit Value</label>
            <div>
              <Field
                id="depositValue"
                name="depositValue"
                placeholder="Enter deposit value (10.00)"
              />
              {errors.depositValue && touched.depositValue ? (
                <span id="depositValueError">{errors.depositValue}</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="firstName">Purchase Price</label>
              <Field
                id="purchasePrice"
                name="purchasePrice"
                placeholder="Enter purchase price (500.00)"
              />
              {errors.purchasePrice && touched.purchasePrice ? (
                <span id="purchasePriceError">{errors.purchasePrice}</span>
              ) : null}
            </div>
            <button type="submit">
              {isSubmitting ? "Calculating..." : "Calculate Loan To Value"}
            </button>
          </Form>
        )}
      </Formik>
    </article>
  );
};

export default LoanToValueCalculator;
