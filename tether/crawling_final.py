import requests
from bs4 import BeautifulSoup


subjectSet = {}

# subject extension 넣기
url = "https://guide.berkeley.edu/undergraduate/degree-programs/"
file = open("data_final.html", "w")
response = requests.get(url)
file.write(response.text)
file.close()
soup = BeautifulSoup(response.text, 'html.parser')
soupCategories = soup.find_all("a", "pview")
Categories = open("subjectExtension.txt", "w")
for category in soupCategories:
    # Categories.write(category['href']+":"+category.get_text()+'\n')
    subjectSet[category.get_text()] = category['href']
Categories.close()

subject = input("Enter your subject: ")

new_url = url + subjectSet[subject]+"/#majorrequirementstext"

response2 = requests.get(new_url)
soup2 = BeautifulSoup(response2.text, 'html.parser')
soupSubjectList = soup2.find_all("a","bubblelink code")

# print(soupSubjectList)

# for sl in soupSubjectList:
#     print(sl.get_text())


relatedSubject = set()
Courses = set()


for sub in soupSubjectList:
    text = sub['title']
    text_list = text.split()
    # if len 3 -> 2 [0,1]
    # if len 2 -> 1 [0]
    subject_name = ""
    for i in range(0,len(text_list)-1):
        subject_name+=text_list[i]
        subject_name+=" "
    relatedSubject.add(subject_name)
    Courses.add(" ".join(text_list))

print("You have to listen these: \n")
print(Courses)
print("You need to listen total "+str(len(Courses))+" courses")
print(relatedSubject)

