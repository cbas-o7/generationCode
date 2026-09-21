def trivia_fetch(num):
  trivia = {
    1:{
        "number": 1,
        "text": "Originalmente representado como una línea recta o ficha cónica por los sumerios, fue el primer signo escrito de la humanidad."
    },
    2:{
        "number": 2,
        "text": "El 2 es el número atómico del Helio (He)."
    },
    3:{
        "number": 3,
        "text": "El código genético se basa en tripletes de moléculas (ARN), lo que lo convierte en una clave fundamental de la biología."
    },
    4:{
        "number": 4,
        "text": "Een países de Asia Oriental como China, Japón y Corea, el número 4 se considera de mala suerte debido a su similitud fonética con la palabra \"muerte\""
    },
    5:{
        "number": 5,
        "text": "El 5 es el número atómico del Boro (B)."
    },
    42:{
        "number": 42,
        "text": "El número 42 es ampliamente conocido como la respuesta a la vida, el universo y todo lo demás en la serie de comedia \"Guía del Autoestopista Galáctico\"."
    },
    1000:{
        "number": 1000,
        "text": "Existen varias parejas de ciudades en el mundo (como Alejandría y Bursa, o Belgrado y Berlín) separadas exactamente por 1.000 kilómetros en línea recta."
    },
    "default":{
        "number": 0,
        "text": "Este es un mensaje por defecto."
    }
  }
  for key in trivia:
    print(f"Comparando {key} con {num}")
    if key == num:
        resultado = trivia[num]

  return resultado


def main():
  print("Bienvenido al juego de trivia de números!")
  numero = int(input("Ingrese un número para obtener su trivia: "))
  trivia = trivia_fetch(numero)
  print(f"Trivia para el número {trivia['number']}: {trivia['text']}")

if __name__=="__main__":
  main()