# total_dictionary = {}
# while True:
#     q = input("질문을 입력해주세요: ")
#     if q == 'q':
#         break
#     else:
#         total_dictionary[q] = ""

# for q in total_dictionary.keys():
#     print(q)
#     a = input("답변을 입력해주세요: ")
#     total_dictionary[q] = a

# print(total_dictionary)

total_list = []
while True:
    question = input("질문을 입력해주세요: ")
    if question == 'q':
        break
    else:
        total_list.append({'질문':question,'답변':''})

for x in total_list:
    print(x['질문'])
    answer = input("답변을 입력하시오: ")
    x['답변'] = answer

print(total_list)

total_dictionary = {}
for x in total_list:
    total_dictionary[x['질문']] = x['답변']

print(total_dictionary)