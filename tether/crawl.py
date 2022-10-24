import requests
from bs4 import BeautifulSoup
from datetime import datetime

url = "https://guide.berkeley.edu/undergraduate/degree-programs/"
file = open("data.html","w")
response = requests.get(url)
file.write(response.text)
file.close()
soup = BeautifulSoup(response.text,'html.parser')
soupCategories = soup.find_all("a","pview")
Categories = open("result.txt","w")
for category in soupCategories:
    Categories.write(category.get_text()+'\n')
Categories.close()
# results = soupRanked.find_all("span","title")
# rank = 1
# for result in results:
#     print(str(rank) + "위: " + result.get_text()+"\n")
#     rank+=1
# print(datetime.today().strftime("%Y %m %d"))