interface OrgNode {
  title: string;
  description?: string;
  children?: OrgNode[];
}

interface OrgChartProps {
  data: OrgNode;
}

function OrgNode({ node, level = 0 }: { node: OrgNode; level?: number }) {
  const isRoot = level === 0;
  const isSecond = level === 1;

  return (
    <div className="flex flex-col items-center">
      <div
        className={`rounded-xl px-4 py-3 text-center border transition-all duration-200 hover:shadow-card ${
          isRoot
            ? 'min-w-[200px] font-serif font-bold text-base text-primary-foreground'
            : isSecond
            ? 'min-w-[160px] font-sans font-semibold text-sm text-foreground bg-card'
            : 'min-w-[140px] font-sans text-sm text-muted-foreground bg-card'
        }`}
        style={
          isRoot
            ? { backgroundColor: 'oklch(0.38 0.1 155)', borderColor: 'oklch(0.38 0.1 155)' }
            : isSecond
            ? { borderColor: 'oklch(0.38 0.1 155 / 0.3)' }
            : { borderColor: 'oklch(0.88 0.015 90)' }
        }
      >
        <div>{node.title}</div>
        {node.description && (
          <div className="text-xs mt-1 opacity-70">{node.description}</div>
        )}
      </div>

      {node.children && node.children.length > 0 && (
        <>
          {/* Vertical connector */}
          <div
            className="w-0.5 h-6"
            style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.4)' }}
          />
          {/* Horizontal bar */}
          {node.children.length > 1 && (
            <div
              className="h-0.5"
              style={{
                width: `${(node.children.length - 1) * 180}px`,
                maxWidth: '100%',
                backgroundColor: 'oklch(0.38 0.1 155 / 0.4)',
              }}
            />
          )}
          {/* Children */}
          <div className="flex gap-4 flex-wrap justify-center">
            {node.children.map((child, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-0.5 h-6"
                  style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.4)' }}
                />
                <OrgNode node={child} level={level + 1} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function OrgChart({ data }: OrgChartProps) {
  return (
    <div className="overflow-x-auto py-4">
      <div className="min-w-max mx-auto">
        <OrgNode node={data} />
      </div>
    </div>
  );
}
