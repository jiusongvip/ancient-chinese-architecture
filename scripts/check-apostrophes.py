import re
content = open(r'd:\workspace\website\ancient-chinese-architecture\src\data\buildings.ts', encoding='utf-8').read()
lines = content.split('\n')
for i, line in enumerate(lines, 1):
    if "body: '" in line and "'" in line:
        start = line.find("body: '") + 7
        end = line.rfind("'")
        inner = line[start:end]
        bad = [mm.start() for mm in re.finditer(r"(?<!\\)'", inner)]
        if bad:
            print(f'L{i}: {len(bad)} unescaped apostrophes')
            for b in bad:
                print('   ...', inner[max(0, b - 50):b + 50], '...')
