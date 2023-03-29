import pandas
import math
import json

weather = pandas.read_csv('F:\MM-804\src\data\climate-daily.csv')

rain = {}
snow = {}

for i, row in weather.iterrows():
    year = row['LOCAL_DATE'][:4]
    
    if not math.isnan(row['TOTAL_RAIN']):
        rain[year] = rain.get(year, []) + [row['TOTAL_RAIN']]
    else:
        rain[year] = rain.get(year, []) + [0]

    if not math.isnan(row['TOTAL_SNOW']):
        snow[year] = snow.get(year, []) + [row['TOTAL_SNOW']]
    else:
        snow[year] = snow.get(year, []) + [0]

# years = []
# for keys in rain.keys():
#     years.append(int(keys))

rain_data = []
for values in rain.values():
    rain_data.append(values)

snow_data = []
for values in snow.values():
    snow_data.append(values)

with open('F:/MM-804/src/data/rain.json', 'w') as output_file:
    json.dump(rain_data, output_file)
with open('F:/MM-804/src/data/snow.json', 'w') as output_file:
    json.dump(snow_data, output_file)

# with open('../data/years.json', 'w') as output_file:
#     json.dump(years, output_file)