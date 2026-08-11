const ts = require('d:/workspace/website/ancient-chinese-architecture/node_modules/typescript');
const fs = require('fs');
const files = [
  'd:/workspace/website/ancient-chinese-architecture/src/data/buildings.ts',
  'd:/workspace/website/ancient-chinese-architecture/src/data/elements.ts',
  'd:/workspace/website/ancient-chinese-architecture/src/data/dynasties.ts'
];
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  const out = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    reportDiagnostics: true
  });
  const diags = (out.diagnostics || []).filter(d => d.category === ts.DiagnosticCategory.Error);
  if (diags.length === 0) {
    console.log('OK:', f.split('/').pop());
  } else {
    console.log('FAIL:', f.split('/').pop());
    for (const d of diags) {
      const pos = d.file && d.start != null ? d.file.getLineAndCharacterOfPosition(d.start) : null;
      console.log('  L' + (pos ? pos.line + 1 : '?') + ':', ts.flattenDiagnosticMessageText(d.messageText, ' '));
    }
  }
}
