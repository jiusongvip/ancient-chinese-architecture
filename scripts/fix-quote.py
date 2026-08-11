# Fix unterminated string in buildings.ts and scan all data files for quote mismatch
import re

path = 'src/data/buildings.ts'
src = open(path, encoding='utf-8', errors='replace').read()
bad = 'an early example of designed-in maintenance that kept the structure repairable across centuries.'
if bad in src:
    src2 = src.replace(bad + '" }', bad + "' }")
    open(path, 'w', encoding='utf-8', newline='').write(src2)
    print('buildings.ts fixed')
else:
    print('buildings.ts target not found')

# Scan all data files: find lines starting with a quote-string and check end
for f in ['src/data/buildings.ts', 'src/data/elements.ts', 'src/data/dynasties.ts']:
    text = open(f, encoding='utf-8', errors='replace').read()
    lines = text.split('\n')
    problems = []
    for i, l in enumerate(lines):
        m = re.search(r"body:\s*(['\"])", l)
        if m:
            q = m.group(1)
            # count quotes on the line; if odd, likely unterminated
            cnt = l.count(q)
            if cnt % 2 == 1:
                problems.append((i + 1, q, l[:100]))
    if problems:
        print(f, 'PROBLEMS:')
        for p in problems:
            print('  L%d quote=%s | %s' % p)
    else:
        print(f, 'OK')
