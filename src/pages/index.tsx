import Head from "next/head";
import Image from "next/image";
import kotiniLogo from "../../public/kotini.svg";
import LoanValueCalculator from "../components/LoanToValueCalculator";

/**
 * This is the home page under root route which contains the LoanValueCalculator
 * @return {JSX.Element}
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Kotini | Loan to Value Calculator</title>
        <meta name="description" content="Kotini | Loan to Value Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Image src={kotiniLogo} alt="Kotini Logo" />
        <LoanValueCalculator />
      </main>
    </>
  );
}
