import React from 'react';

const Documentation = () => {
  return (
    <aside className="bg-white p-4 rounded-md prose h-fit">
      <h3>Read our documentation</h3>
      <p className="text-sm">
        <span>The multi-step form is a common pattern in web applications. </span>
        <a href="https://chesscoders.atlassian.net/l/cp/5jwZgdxN">Read our latest documentation</a>
        <span> on Confluence</span>
      </p>
      <h3>Other useful links</h3>
      <ul>
        <li className="text-sm">
          <a href="https://chesscoders.atlassian.net/l/cp/QX0c3nct">Git release process</a>
        </li>
        <li className="text-sm">
          <a href="https://chesscoders.atlassian.net/l/cp/q8knqtM0">Software architecture</a>
        </li>
        <li className="text-sm">
          <a href="https://chesscoders.atlassian.net/l/cp/0iZvTwZC">How to Mongodump</a>
        </li>
      </ul>
    </aside>
  );
};

export default Documentation;
