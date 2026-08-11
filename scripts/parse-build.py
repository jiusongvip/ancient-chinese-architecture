import io
content = open(r'd:\workspace\website\ancient-chinese-architecture\build-out.txt', encoding='utf-8', errors='replace').read()
lines = [l for l in content.split('\n') if 'at ' not in l and 'rolldown' not in l and 'node.js' not in l and 'viteBuild' not in l and 'static-build' not in l]
out = '\n'.join(lines[:30])
with open(r'd:\workspace\website\ancient-chinese-architecture\build-errors.txt', 'w', encoding='utf-8') as f:
    f.write(out)
print('written')
