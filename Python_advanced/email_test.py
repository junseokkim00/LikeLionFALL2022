# from email.message import EmailMessage
# import smtplib

# # SMTP 접속을 위한 서버, 계정 설정
# SMTP_SERVER = "smtp.gmail.com"
# # google의 SMTP server 포트 주소는 465
# SMTP_PORT = 465

# a
# # 이메일 유효성 검사 함수
# def is_valid(addr):
#     import re
#     if re.match('(^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,3}$)', addr):
#         return True
#     else:
#         return False

# message = EmailMessage()
# message.set_content("코드라이언 메일링 수업 - 본문입니다.")

# message["Subject"] = "코드라이언 메일링 수업입니다."
# message["From"] = "###@gmail.com"
# message["To"] = "###@gmail.com"

# smtp = smtplib.SMTP_SSL(SMTP_SERVER,SMTP_PORT)
# smtp.login("###@gmail.com","######")

# is_valid("###@gmail.com")
# if smtp.send_message(message)=={} :
#     print("성공적으로 메일을 보냈습니다.")

# smtp.quit()


# My code
import smtplib
from email.message import EmailMessage
import imghdr
import re


message = EmailMessage()
content = "This is a content"
message.set_content(content)

message["Subject"] = "This is "
message["From"] = "###@gmail.com"
message["To"] = "###@gmail.com"

with open("Andrew.JPG","rb") as image:
    image_file = image.read()

img_type = imghdr.what('Andrew',image_file)
message.add_attachment(image_file,'image',img_type)


SMTP_SERVER ="smtp.gmail.com"
SMTP_PORT = 465
smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
smtp.login("###@gmail.com","###")

reg = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.+_-]\.[a-zA-Z]{2,3}$"
url = "sampleurl@sample.com"
print(re.match(reg,url))


smtp.send_message(message)
smtp.quit()
