import React, { useState, useRef, useLayoutEffect } from "react";
import { fullCasesData } from "../data/fullCasesData";

// ---------------- ExpandableRow с анимацией ----------------
function ExpandableRow({
  sectionIdx,
  rowIdx,
  row,
  headersLength,
  isExpanded,
  toggleRow,
}) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded]);

  return (
    <>
      <tr
        className="hover:bg-gray-100 cursor-pointer transition-colors duration-150"
        onClick={() => toggleRow(sectionIdx, rowIdx)}
      >
        {row.word.map((cell, cellIdx) => (
          <td
            key={cellIdx}
            className="border border-gray-300 px-2 py-1 text-[10px] sm:text-xs whitespace-nowrap"
          >
            {cell}
          </td>
        ))}
      </tr>

      <tr>
        <td colSpan={headersLength} className="p-0 border-none">
          <div
            ref={contentRef}
            style={{
              height: `${height}px`,
              overflow: "hidden",
              transition: "height 0.3s ease",
            }}
            className="bg-blue-50 border-l-4 border-blue-300 px-2 py-1 text-[10px] sm:text-xs text-gray-700"
          >
            {row.examples.map((example, exIdx) => (
              <div key={exIdx} className="py-0.5">
                <span className="font-semibold">{example.german}</span> —{" "}
                {example.russian}
              </div>
            ))}
          </div>
        </td>
      </tr>
    </>
  );
}

// ---------------- TableSection ----------------
function TableSection({ section, sectionIdx, expandedRows, toggleRow }) {
  return (
    <div className="mb-6">
      <h2 className="text-sm sm:text-base font-semibold mb-2">
        {section.type}
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 table-auto text-[10px] sm:text-xs">
          <thead className="bg-gray-100">
            <tr>
              {section.headers.map((header, hIdx) => (
                <th
                  key={hIdx}
                  className="border border-gray-300 px-2 py-1 text-left whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, rowIdx) => {
              const rowKey = `${sectionIdx}-${rowIdx}`;
              return (
                <ExpandableRow
                  key={rowIdx}
                  sectionIdx={sectionIdx}
                  rowIdx={rowIdx}
                  row={row}
                  headersLength={section.headers.length}
                  isExpanded={!!expandedRows[rowKey]}
                  toggleRow={toggleRow}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ---------------- Main Component ----------------
export default function InteractiveCasesMobileFull() {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (sectionIdx, rowIdx) => {
    const key = `${sectionIdx}-${rowIdx}`;
    setExpandedRows((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-2 bg-gray-50 max-w-full">
      <h1 className="text-sm sm:text-base font-bold mb-2">
        {fullCasesData.title}
      </h1>
      <p className="mb-3 text-gray-700 text-[10px] sm:text-xs">
        {fullCasesData.description}
      </p>

      {fullCasesData.table.map((section, sectionIdx) => (
        <TableSection
          key={sectionIdx}
          section={section}
          sectionIdx={sectionIdx}
          expandedRows={expandedRows}
          toggleRow={toggleRow}
        />
      ))}
    </div>
  );
}
