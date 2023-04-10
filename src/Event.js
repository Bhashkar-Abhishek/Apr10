import React, { useState } from 'react';
import styles from './Event.module.css';

export default function Event() {
  const [h1MouseOver, setH1MouseOver] = useState(false);
  const [h1Logs, setH1Logs] = useState([]);
  const [h2MouseOver, setH2MouseOver] = useState(false);
  const [h2Logs, setH2Logs] = useState([]);

  function handleH1MouseOver() {
    setH1MouseOver(true);
    setH1Logs(prevLogs => [...prevLogs, { time: new Date().toLocaleString(), eventName: 'mouse over' }]);
  }

  function handleH1MouseOut() {
    setH1MouseOver(false);
    setH1Logs(prevLogs => [...prevLogs, { time: new Date().toLocaleString(), eventName: 'mouse out' }]);
  }

  function handleH2MouseOver() {
    setH2MouseOver(true);
    setH2Logs(prevLogs => [...prevLogs, { time: new Date().toLocaleString(), eventName: 'mouse over' }]);
  }

  function handleH2MouseOut() {
    setH2MouseOver(false);
    setH2Logs(prevLogs => [...prevLogs, { time: new Date().toLocaleString(), eventName: 'mouse out' }]);
  }

  return (
    <div className={styles.container}>
      <h1 onMouseOver={handleH1MouseOver} onMouseOut={handleH1MouseOut} className={h1MouseOver ? styles.hover : ''}>Header 1</h1>
      <table>
        <thead>
          <tr>
            <th>H1 Logs</th>
            <th>Time</th>
            <th>Event Name</th>
          </tr>
        </thead>
        <tbody>
          {h1Logs.map((log, index) => (
            <tr key={index}>
              <td>H1</td>
              <td>{log.time}</td>
              <td>{log.eventName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 onMouseOver={handleH2MouseOver} onMouseOut={handleH2MouseOut} className={h2MouseOver ? styles.hover : ''}>Header 2</h2>
      <table>
        <thead>
          <tr>
            <th>H2 Logs</th>
            <th>Time</th>
            <th>Event Name</th>
          </tr>
        </thead>
        <tbody>
          {h2Logs.map((log, index) => (
            <tr key={index}>
              <td>H2</td>
              <td>{log.time}</td>
              <td>{log.eventName}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}
