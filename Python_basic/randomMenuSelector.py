import random, time
lunch = []
while True:
    item = input("음식을 추가해주세요: ")
    if item == 'q':
        break
    elif item in lunch:
        print("이미 입력하신 음식입니다. 다시 입력해주시기 바랍니다.")
    else:
        lunch.append(item)
        print(lunch)

set_lunch = set(lunch)

while True:
    item = input("삭제하고 싶은 음식을 입력해주세요: ")
    if item == 'q':
        break
    elif item in set_lunch:
        set_lunch = set_lunch - set([item])
        print(set_lunch)
    else:
        print("입력하신 음식이 존재하지 않습니다. 다시 입력해주시기 바랍니다.")

print(set_lunch,"중에서 선택합니다")
for i in range(5):
    print(5-i)
    time.sleep(1)
print(random.choice(list(set_lunch)))
    