# Fix real newlines inside single-quoted bodies in dynasties.ts (shang sections)
path = 'src/data/dynasties.ts'
src = open(path, encoding='utf-8', errors='replace').read()

pairs = [
    ('every subsequent dynasty.\n\nArchaeological excavations at Yinxu',
     'every subsequent dynasty.\\n\\nArchaeological excavations at Yinxu'),
    ('laying building foundations.\n\nThe inscriptions are also the earliest',
     'laying building foundations.\\n\\nThe inscriptions are also the earliest'),
    ('consecration ceremonies.\n\nThe Shang also developed early roof tiles',
     'consecration ceremonies.\\n\\nThe Shang also developed early roof tiles'),
]

for old, new in pairs:
    if old in src:
        src = src.replace(old, new)
        print('fixed:', old[:50])
    else:
        print('NOT FOUND:', old[:50])

open(path, 'w', encoding='utf-8', newline='').write(src)
print('done')
