import pandas
import math
import json

weather = pandas.read_csv('../data/climate-daily.csv')

wind = {}

for i, row in weather.iterrows():
    year = row['LOCAL_DATE'][:4]

    if not math.isnan(row['DIRECTION_MAX_GUST']) and row['DIRECTION_MAX_GUST'] > 0:
        temp = wind.get(year, [0]*36)
        temp[int(row['DIRECTION_MAX_GUST'])-1] += 1
        wind[year] = temp

wind_data = []

for values in wind.values():
    wind_data.append(values)

with open('../data/wind_dirs.json', 'w') as output_file:
    json.dump(wind_data, output_file)

