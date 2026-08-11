# Analyze content depth: per-building section counts, body lengths, weak intros, section headings
import re

def load(f):
    return open(f, encoding='utf-8', errors='replace').read()

BODY_PAT = re.compile(r"body:\s*(['\"])(.*?)(?<!\\)\1", re.S)
DESC_PAT = re.compile(r"description:\s*(['\"])(.*?)(?<!\\)\1", re.S)
HEAD_PAT = re.compile(r"heading:\s*(['\"])(.*?)(?<!\\)\1", re.S)

def strip_esc(s):
    return s.replace('\\n', ' ').replace('\\"', '"').replace("\\'", "'")

def analyze_blocks(src, item_pat):
    items = []
    for m in re.finditer(item_pat, src):
        items.append((m.group(1), m.start()))
    result = []
    for i, (name, start) in enumerate(items):
        end = items[i + 1][1] if i + 1 < len(items) else len(src)
        block = src[start:end]
        desc = DESC_PAT.search(block)
        dlen = len(strip_esc(desc.group(2))) if desc else 0
        heads = [h.group(2) for h in HEAD_PAT.finditer(block)]
        bodies = [strip_esc(b.group(2)) for b in BODY_PAT.finditer(block)]
        blens = [len(b) for b in bodies]
        result.append({
            'name': name, 'desc': dlen, 'heads': heads,
            'blens': blens, 'total': dlen + sum(blens), 'bodies': bodies
        })
    return result

# ---- buildings ----
src = load('src/data/buildings.ts')
b = analyze_blocks(src, re.compile(r"id: '([a-z0-9-]+)'"))
print('=== BUILDINGS: %d items ===' % len(b))
for it in b:
    flag = ' <== THIN' if it['total'] < 2400 else ''
    print('%s | desc=%d | %d sec %s | total=%d%s' % (it['name'], it['desc'], len(it['heads']), it['blens'], it['total'], flag))

# ---- elements ----
src2 = load('src/data/elements.ts')
e = analyze_blocks(src2, re.compile(r"id: '([a-z0-9-]+)'"))
print()
print('=== ELEMENTS: %d items ===' % len(e))
for it in e:
    flag = ' <== THIN' if it['total'] < 1800 else ''
    print('%s | desc=%d | %d sec %s | total=%d%s' % (it['name'], it['desc'], len(it['heads']), it['blens'], it['total'], flag))

# ---- dynasties ----
src3 = load('src/data/dynasties.ts')
d = analyze_blocks(src3, re.compile(r"id: '([a-z0-9-]+)'"))
print()
print('=== DYNASTIES: %d items ===' % len(d))
for it in d:
    flag = ' <== THIN' if it['total'] < 1800 else ''
    print('%s | desc=%d | %d sec %s | total=%d%s' % (it['name'], it['desc'], len(it['heads']), it['blens'], it['total'], flag))
