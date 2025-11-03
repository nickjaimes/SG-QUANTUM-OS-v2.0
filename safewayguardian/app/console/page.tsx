import React, { useEffect, useMemo, useRef, useState } from 'react';

'use client';


type Severity = 'info' | 'warning' | 'critical';
type AlertEvent = {
    id: string;
    time: string; // ISO
    severity: Severity;
    message: string;
    source?: string;
};

const initialEvents: AlertEvent[] = [
    { id: '1', time: new Date().toISOString(), severity: 'critical', message: 'Unauthorized access attempt detected', source: 'auth-service' },
    { id: '2', time: new Date(Date.now() - 1000 * 60 * 5).toISOString(), severity: 'warning', message: 'High memory usage on node-3', source: 'monitor' },
    { id: '3', time: new Date(Date.now() - 1000 * 60 * 60).toISOString(), severity: 'info', message: 'Daily backup completed', source: 'backup-service' },
];

function formatTime(iso: string) {
    const d = new Date(iso);
    return d.toLocaleString();
}

export default function ConsolePage(): JSX.Element {
  // sample data (replace with your real data source)
  const [query, setQuery] = React.useState("");
  const events = React.useMemo(
    () =>
      [
        { message: "TRINITY AI CONSOLE Initialized ✅", source: "system" },
        { message: "Awaiting command… (SG-HELP to list)", source: "system" },
      ] as { message: string; source?: string }[],
    []
  );

  const filtered = events.filter((e) =>
    (e.message + " " + (e.source ?? "")).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main
      style={{
        background: "#0a1128",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        padding: 24,
        fontFamily: "monospace",
      }}
    >
      <section style={{ width: "min(1000px, 92vw)" }}>
        <h1 style={{ color: "lime", margin: 0 }}>✅ Trinity Console Active</h1>

        <div
          style={{
            marginTop: 16,
            padding: 16,
            border: "1px solid #0ff",
            borderRadius: 12,
            background: "#07101d",
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter output…"
              style={{
                flex: 1,
                background: "transparent",
                border: "1px solid #0ff",
                borderRadius: 8,
                padding: "8px 10px",
                color: "lime",
                outline: "none",
              }}
            />
            <button
              type="button"
              onClick={() => setQuery("")}
              style={{
                border: "1px solid #0ff",
                background: "transparent",
                color: "#0ff",
                padding: "8px 12px",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Clear
            </button>
          </div>

          <div style={{ marginTop: 16, overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "1px solid #0ff" }}>
                  <th style={{ padding: 10 }}>Message</th>
                  <th style={{ padding: 10, color: "#999" }}>Source</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((e, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(0,255,255,0.15)" }}>
                    <td style={{ padding: 10 }}>{e.message}</td>
                    <td style={{ padding: 10, color: "#444" }}>{e.source ?? "-"}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={2} style={{ padding: 10, color: "#888" }}>
                      No results.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
