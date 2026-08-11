# Scan data files for body/heading strings where opening quote != closing quote
import re

files = ['src/data/buildings.ts', 'src/data/elements.ts', 'src/data/dynasties.ts']

def find_mismatch(text):
    problems = []
    for i, l in enumerate(text.split('\n')):
        # find body: '...' or body: "..." occurrences
        for m in re.finditer(r"(heading|body):\s*(['\"])", l):
            q = m.group(2)
            rest = l[m.end():]
            # find the closing quote, skipping escaped
            pos = 0
            while pos < len(rest):
                ch = rest[pos]
                if ch == '\\':
                    pos += 2
                    continue
                if ch == q:
                    # check what follows - should be comma, }, or end-ish
                    after = rest[pos+1:pos+4]
                    if not re.match(r"^[\s,}\]]", after):
                        # maybe there are more chars - just continue scanning
                        pass
                    break
                pos += 1
            else:
                problems.append((i + 1, m.group(1), q, l[:80]))
                continue
            # check if string terminator is followed by reasonable token
            after = rest[pos+1:pos+6]
            if not re.match(r"^\s*[,}\]]", after) and '}' not in after[:6]:
                problems.append((i + 1, m.group(1), q, 'BAD-END: ' + l[:80]))
    return problems

for f in files:
    text = open(f, encoding='utf-8', errors='replace').read()
    probs = find_mismatch(text)
    if probs:
        print(f, '->', len(probs), 'problems')
        for p in probs:
            print('  L%d [%s] quote=%s | %s' % p)
    else:
        print(f, 'OK')
