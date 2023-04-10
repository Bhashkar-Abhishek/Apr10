import React, { useState } from 'react';
import styles from './Table.module.css';

export default function Table() {
  const [number, setNumber] = useState(null);
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const newTable = [];
    for (let i = 1; i <= 10; i++) {
      newTable.push(number * i);
    }
    setTable(newTable);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => {
        const newNumber = Math.floor(Math.random() * 10) + 1;
        setNumber(newNumber);
        setTable([]);
      }}>Generate Number</button>
      <button className={styles.button} onClick={generateTable} disabled={!number}>Generate Table</button>
      <p className={styles.heading}>{number ? `Multiplication Table for ${number}` : 'Click "Generate Number" to start.'}</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Number</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {table.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
