import pandas
import math
import json

cal = pandas.read_csv('../data/Monthly/weatherstats_calgary_normal_monthly.csv')
van = pandas.read_csv('../data/Monthly/weatherstats_vancouver_normal_monthly.csv')
tor = pandas.read_csv('../data/Monthly/weatherstats_toronto_normal_monthly.csv')
mon = pandas.read_csv('../data/Monthly/weatherstats_montreal_normal_monthly.csv')
win = pandas.read_csv('../data/Monthly/weatherstats_winnipeg_normal_monthly.csv')
thu = pandas.read_csv('../data/Monthly/weatherstats_thunderbay_normal_monthly.csv')

cal_data = {}
van_data = {}
tor_data = {}
mon_data = {}
win_data = {}
thu_data = {}

for i in range(600):
    year = int(cal.iloc[i]['date'][:4])

    cal_data[year] = cal_data.get(year, 0) + cal.iloc[i]['snow_v']
    van_data[year] = van_data.get(year, 0) + van.iloc[i]['snow_v']
    tor_data[year] = tor_data.get(year, 0) + tor.iloc[i]['snow_v']
    mon_data[year] = mon_data.get(year, 0) + mon.iloc[i]['snow_v']
    win_data[year] = win_data.get(year, 0) + win.iloc[i]['snow_v']
    thu_data[year] = thu_data.get(year, 0) + thu.iloc[i]['snow_v']

years = [i for i in range(2023, 1972, -1)]
json_data = [[van_data[year], cal_data[year], tor_data[year], mon_data[year], win_data[year], thu_data[year]] for year in years ]

locs = [
        ['49.2827', '51.0447', '43.6532', '45.5017', '49.8954', '48.3809'],               # latitude
        ['-123.1207', '-114.0719', '-79.3832', '-73.5673', '-97.1385', '-89.2477']        # longitude
    ]

with open('../data/snow_cities.json', 'w') as output_file:
    json.dump(json_data, output_file)

with open('../data/snow_years.json', 'w') as output_file:
    json.dump(years, output_file)

with open('../data/snow_locs.json', 'w') as output_file:
    json.dump(locs, output_file)