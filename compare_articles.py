import csv, json, sys

csv_file = sys.argv[1]
sanity_json = sys.argv[2]

with open(csv_file, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    csv_rows = []
    for row in reader:
        if row.get('Title'):
            csv_rows.append(row)
    csv_titles = [row['Title'].strip() for row in csv_rows]

with open(sanity_json, 'r', encoding='utf-8') as f:
    sanity_data = json.load(f)
    sanity_titles = [item['title'].strip() for item in sanity_data['result']]

print(f'Total rows in CSV with Title: {len(csv_titles)}')
print(f'Unique titles in CSV: {len(set(csv_titles))}')
print(f'Total in Sanity: {len(sanity_titles)}')

sanity_titles_set = set(sanity_titles)
missing = [t for t in csv_titles if t not in sanity_titles_set]
unique_missing = sorted(list(set(missing)))

print(f'Missing from Sanity: {len(unique_missing)}')
if unique_missing:
    print('Example missing:')
    for m in unique_missing[:10]:
        print(f'- {m}')
