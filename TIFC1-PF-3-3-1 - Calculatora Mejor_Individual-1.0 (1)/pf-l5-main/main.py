
def addmultiplenumbers(values):
  total = 0
  for i in values:
    total += i
  return total

def subtractmultiplenumbers(values):
  total = values[0]
  for i in values:
    total -= i
  return total

def multiplymultiplenumbers(values):
  product = 1
  for i in values:
    product *= i
  return product

def dividemultiplenumbers(values):
  quotient = values[0]
  for i in values:
    if i != 0:
      quotient /= i
    else:
      return "Error: No se puede dividir entre cero."
  return quotient

def isiteven(num):
  value = False

  if num % 2 == 0:
    value = True
    
  return value

def isitaninteger(num):
  value = False

  if type(num) == int:
    value = True

  return value

def convertoint(values):
  converted = []
  for i in values:
    converted.append(int(i))
  return converted

def main():
  print("Bienvenido a la calculadora mejorada")
  ciclo = True

  while ciclo:
    print("Ingresa que operación deseas realizar: ")
    print("1. Suma")
    print("2. Resta")
    print("3. Multiplicación")
    print("4. División")
    print("5. Son Par?")
    print("6. Son numeros enteros?")
    print("7. Salir")

    opcion = input("Opción: ")

    if opcion == "7":
      ciclo = False
      break

    values = []

    a = input("Ingresa el primer número: ")
    b = input("Ingresa el segundo número: ")
    values = [a, b]

    masNums = input("¿Deseas ingresar más números? (s/n): ").lower()
    masNumsCiclo = True

    while masNumsCiclo:
      if masNums == "s":
        c = input("Ingresa el número: ")
        values.append(c)
        masNums = input("¿Deseas ingresar más números? (s/n): ").lower()
      elif masNums == "n":
        masNumsCiclo = False
        break;

  values = convertoint(values)

  if opcion == "1":
    resultado = addmultiplenumbers(values)
    print("El resultado de la suma es: ", resultado)

  elif opcion == "2":
    resultado = subtractmultiplenumbers(values)
    print("El resultado de la resta es: ", resultado)

  elif opcion == "3":
    resultado = multiplymultiplenumbers(values)
    print("El resultado de la multiplicación es: ", resultado)

  elif opcion == "4":
    resultado = dividemultiplenumbers(values)
    print("El resultado de la división es: ", resultado)

  elif opcion == "5":
    for x in values:
      isEven = isiteven(x)
      print(f"El número {x}es par: {isEven}")

  elif opcion == "6":
    values = convertoint(values)
    for x in values:
      isInt = isitaninteger(x)
      print(f"El número {x}es entero: {isInt}")


if __name__=="__main__":
  main()
