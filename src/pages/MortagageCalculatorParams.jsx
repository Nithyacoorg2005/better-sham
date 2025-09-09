import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Mortage.module.scss";

const MortgageCalculatorParams = () => {
  const router = useRouter();
  const { taxes = 200, zip = "10001" } = router.query;

  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [propertyTax, setPropertyTax] = useState(Number(taxes));
  const [insurance, setInsurance] = useState(100);
  const [hoa, setHoa] = useState(50);

  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const basePayment =
    (loanAmount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

  const monthlyPayment =
    basePayment + propertyTax / 12 + insurance / 12 + hoa;

  return (
    <div className={styles.calculatorContainer}>
      <h1>📊 Mortgage Calculator (Advanced)</h1>
      <p>ZIP Code: {zip}</p>

      <div className={styles.formGroup}>
        <label>Home Price ($)</label>
        <input
          type="number"
          value={homePrice}
          onChange={(e) => setHomePrice(Number(e.target.value))}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Down Payment ($)</label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Loan Term (Years)</label>
        <select
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
        >
          <option value={15}>15 Years</option>
          <option value={20}>20 Years</option>
          <option value={30}>30 Years</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Interest Rate (%)</label>
        <input
          type="number"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Property Tax ($/year)</label>
        <input
          type="number"
          value={propertyTax}
          onChange={(e) => setPropertyTax(Number(e.target.value))}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Home Insurance ($/year)</label>
        <input
          type="number"
          value={insurance}
          onChange={(e) => setInsurance(Number(e.target.value))}
        />
      </div>

      <div className={styles.formGroup}>
        <label>HOA Fees ($/month)</label>
        <input
          type="number"
          value={hoa}
          onChange={(e) => setHoa(Number(e.target.value))}
        />
      </div>

      <div className={styles.resultBox}>
        <h2>Total Monthly Payment:</h2>
        <p>${monthlyPayment.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MortgageCalculatorParams;
