import random

print(random.choice(['피자','떡볶이','치킨']))

lunch = random.choice(["된장찌개","피자","제육볶음"])
dinner = random.choice(["김밥","쫄면","돈까스"])
print(lunch)
print(dinner)


information = {}
information["age"] = 22
information["name"] = "Andrew"
information["hobby"] = "Soccer"
print(information.get("name"))

food = ['피자','된장찌개','치킨','김밥','라면','돈까스']
for i in food:
    print(i)


for x,y in information.items():
    print(x,y)

    set1 = set([1,2,3])
    set2 = set([3,4,5])
    set3 = set1 & set2
    set4 = set1 | set2
    set5 = set1 - set2
    print(set3)
    print(set4)
    print(set5)