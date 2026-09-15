text = ""
for i in range(1, 1001):
    if i % 3 == 0:
        text += "Fizz"
    if i % 5 == 0:
        text += "Buzz"

    print(text.capitalize() if text else i)
    text = ""