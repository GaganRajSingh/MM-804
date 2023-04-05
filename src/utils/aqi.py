import pandas 
import json

aqi = pandas.read_csv('../data/weatherstats_edmonton_daily.csv')

dates = aqi.head(150)['date'].tolist()
values = aqi.head(150)['avg_health_index'].tolist()

dates = dates[::-1]
values = values[::-1]

with open("../data/aqi_dates.json", "w" ) as output_file:
    json.dump(dates, output_file)
with open("../data/aqi_values.json", "w" ) as output_file:
    json.dump(values, output_file)