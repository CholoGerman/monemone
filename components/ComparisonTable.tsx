import type { AffiliateProgram } from "@/lib/affiliate-links";

import AffiliateLink from "./AffiliateLink";

type ComparisonRow = {
  app: string;
  type: string;
  earnings: string;
  effort: string;
  payoutSpeed: string;
  program?: AffiliateProgram;
};

type ComparisonTableProps = {
  rows?: ComparisonRow[];
};

export default function ComparisonTable({ rows = [] }: ComparisonTableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-zinc-200 bg-white">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-zinc-100 text-zinc-700">
          <tr>
            <th className="px-4 py-3 font-semibold">App</th>
            <th className="px-4 py-3 font-semibold">Type</th>
            <th className="px-4 py-3 font-semibold">Earnings</th>
            <th className="px-4 py-3 font-semibold">Effort</th>
            <th className="px-4 py-3 font-semibold">Payout Speed</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.app} className="border-t border-zinc-200">
              <td className="px-4 py-3 text-zinc-900">
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{row.app}</span>
                  {row.program ? (
                    <AffiliateLink
                      program={row.program}
                      position={`comparison_${row.app.replace(/\s+/g, "_").toLowerCase()}`}
                      className="w-fit text-sm font-medium text-emerald-700 underline hover:text-emerald-800"
                    >
                      Sign up
                    </AffiliateLink>
                  ) : null}
                </div>
              </td>
              <td className="px-4 py-3 text-zinc-700">{row.type}</td>
              <td className="px-4 py-3 text-zinc-700">{row.earnings}</td>
              <td className="px-4 py-3 text-zinc-700">{row.effort}</td>
              <td className="px-4 py-3 text-zinc-700">{row.payoutSpeed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
