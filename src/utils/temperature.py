import pandas
import json
import math
weather = pandas.read_csv('../data/climate-daily.csv')

mean_values = {}
min_values = {}
max_values = {}

for i, row in weather.iterrows():
    year = row['LOCAL_DATE'][:4]
    if year=='1996' or year=='2023':
        continue
    if not math.isnan(row['MEAN_TEMPERATURE']):
        mean_values[year] = mean_values.get(year, []) + [row['MEAN_TEMPERATURE']]
    else:
        mean_values[year] = mean_values.get(year, []) + [0]
    if not math.isnan(row['MIN_TEMPERATURE']):
        min_values[year] = min_values.get(year, []) + [row['MIN_TEMPERATURE']]
    else:
        min_values[year] = min_values.get(year, []) + [0]
    if not math.isnan(row['MAX_TEMPERATURE']):
        max_values[year] = max_values.get(year, []) + [row['MAX_TEMPERATURE']]
    else:
        max_values[year] = max_values.get(year, []) + [0]

years = []
for keys in mean_values.keys():
    years.append(int(keys))


mean_data = []
for values in mean_values.values():
    mean_data.append(values)

min_data = []
for values in min_values.values():
    min_data.append(values)

max_data = []
for values in max_values.values():
    max_data.append(values)

with open('../data/mean_temp.json', 'w') as output_file:
    json.dump(mean_data, output_file)
with open('../data/min_temp.json', 'w') as output_file:
    json.dump(min_data, output_file)
with open('../data/max_temp.json', 'w') as output_file:
    json.dump(max_data, output_file)

with open('../data/years.json', 'w') as output_file:
    json.dump(years, output_file)