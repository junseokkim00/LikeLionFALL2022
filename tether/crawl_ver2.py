import requests
from bs4 import BeautifulSoup
from datetime import datetime

url = "https://guide.berkeley.edu/courses/"
file = open("data2.html", "w")
response = requests.get(url)
file.write(response.text)
file.close()
soup = BeautifulSoup(response.text, 'html.parser')
soupPart = soup.find("div", id="atozindex")
soupCategories = soupPart.find_all("li")
Categories = open("result2.txt", "w")
for category in soupCategories:
    Categories.write(category.get_text()+'\n')
Categories.close()
