import requests
import random

def trivia_fetch(num):

    response = requests.get(f"https://opentdb.com/api.php?amount={num}&type=multiple")

    response = response.json() 
    

    #print(response['results'][0]['question'])
  
    

    return response['results']


def main():
    print("Bienvenido al juego de trivia de números!")
    howMany = int(input("Ingrese la cantidad de preguntas que desea responder: "))
    trivia = trivia_fetch(howMany)
    

    for x in trivia:
        print(x['question'])
        respuestaCorrecta = random.randint(0, 3)

        for i in range(4):
            if i == respuestaCorrecta:
                print(f"{i}: {x['correct_answer']}")
            else:
                print(f"{i}: {x['incorrect_answers'][i - (1 if i > respuestaCorrecta else 0)]}")

        print("Escribe la opcion correcta(0-3): ")
        opcion = int(input())

        if opcion == respuestaCorrecta:
            print("Respuesta correcta!")
        else:
            print(f"Respuesta incorrecta! La respuesta correcta era: {x['correct_answer']}")
    #print("Bienvenido al juego de trivia de números!")
    #numero = int(input("Ingrese un número para obtener su trivia: "))
    #trivia = trivia_fetch(numero)
    #print(f"Trivia para el número {trivia['number']}: {trivia['text']}")


if __name__=="__main__":
    main()