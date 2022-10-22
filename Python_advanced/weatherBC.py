import requests
import json

cityname = "Seoul"
APIkey = "7a2bd13747c45e0c864c30635bcda70f"
lang = "kr"
units = "metric"

api = f"https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={APIkey}&lang={lang}&units={units}"

response = requests.get(api)
data = json.loads(response.text)


# name of the region
print("The name of the region is "+data["name"])
# description
print("The weather is "+data["weather"][0]["description"])
# current temp
print("The current temperature is "+str(data["main"]["temp"]))
# feels like temp
print("It feels like the temperature is "+str(data["main"]["feels_like"]))
# temp_min
print("The min temp is "+str(data["main"]["temp_min"]))
# temp_max
print("The max temp is "+ str(data["main"]["temp_max"]))
