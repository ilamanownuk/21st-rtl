import type { PropDoc } from "@/lib/registry";

export default function PropsTable({ props }: { props: PropDoc[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead className="bg-muted/60 text-xs text-muted-foreground">
          <tr>
            <th className="px-4 py-2.5 text-start font-medium">پراپ</th>
            <th className="px-4 py-2.5 text-start font-medium">نوع</th>
            <th className="px-4 py-2.5 text-start font-medium">پیش‌فرض</th>
            <th className="px-4 py-2.5 text-start font-medium">توضیح</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p) => (
            <tr key={p.name} className="border-t align-top">
              <td className="whitespace-nowrap px-4 py-3">
                <code dir="ltr" className="font-mono text-[13px] font-medium">
                  {p.name}
                </code>
                {p.required && (
                  <span className="ms-2 rounded bg-rose-50 px-1.5 py-0.5 text-[11px] font-medium text-rose-600">الزامی</span>
                )}
              </td>
              <td className="px-4 py-3">
                <code dir="ltr" className="inline-block rounded bg-muted px-1.5 py-0.5 font-mono text-[12px] text-sky-800">
                  {p.type}
                </code>
              </td>
              <td className="px-4 py-3">
                {p.default ? (
                  /^[؀-ۿ]/.test(p.default) ? (
                    <span className="text-muted-foreground">{p.default}</span>
                  ) : (
                    <code dir="ltr" className="font-mono text-[12px] text-muted-foreground">
                      {p.default}
                    </code>
                  )
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </td>
              <td className="px-4 py-3 leading-7">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
