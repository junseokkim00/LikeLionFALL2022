from googletrans import Translator

# make translator
translator = Translator()

sentence = "안녕하세요 Andrew입니다."

detected = translator.detect(sentence)
result = translator.translate(sentence,"en",detected.lang)

print("===========출 력 결 과===========")
print(detected.lang,":",sentence)
print(result.dest,":",result.text)