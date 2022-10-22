import requests
from bs4 import BeautifulSoup
from datetime import datetime

url = "https://datalab.naver.com/"
file = open("datalab.html","w")
response = requests.get(url)
file.write(response.text)
file.close()
soup = BeautifulSoup(response.text,'html.parser')
soupRanked = soup.find("ul","rank_list")
# print(soupRanked.get_text)
results = soupRanked.find_all("span","title")
rank = 1
for result in results:
    print(str(rank) + "위: " + result.get_text()+"\n")
    rank+=1
print(datetime.today().strftime("%Y %m %d"))