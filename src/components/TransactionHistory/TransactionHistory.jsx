import TransactionHistoryItem from "./TransactionHistoryItem.jsx";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.container}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <TransactionHistoryItem
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </tbody>
    </table>
  );
}
