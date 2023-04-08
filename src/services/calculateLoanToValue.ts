import axios from "axios";

const KOTINI_GRAPHQL_URL = "https://gateway.kotini.co/graphql";
const LOAN_TO_VALUE_QUERY = `query($depositValue: Int!, $purchasePrice: Int!){loanToValueCalc(depositValue: $depositValue, purchasePrice: $purchasePrice) {result}}`;

type Props = {
  depositValue: number;
  purchasePrice: number;
};

/**
 * This is the service that interacts with the GraphQL endpoint
 * it accepts the stated props and returns a result which whill then be used
 * in the LoanToValueCalculator component
 * @param {Props} {Props}
 * @return {String} result
 */
export const calculateLoanToValue = async ({
  depositValue,
  purchasePrice,
}: Props): Promise<string> => {
  try {
    const {
      data: {
        data: {
          loanToValueCalc: { result },
        },
      },
    } = await axios.post(
      KOTINI_GRAPHQL_URL,
      {
        query: LOAN_TO_VALUE_QUERY,
        variables: {
          depositValue: depositValue,
          purchasePrice: purchasePrice,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
