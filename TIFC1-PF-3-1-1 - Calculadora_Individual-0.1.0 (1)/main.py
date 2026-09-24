calculadora = True

while calculadora:
    print("======= Ingresa que nueva operación deseas realizar =======")
    print("1. Suma")
    print("2. Resta")
    print("3. Multiplicación")
    print("4. División")
    print("5. Salir")

    opcion = input("Opción: ")

    if opcion == "5":
        calculadora = False
        print("Saliendo de la calculadora...")
        break

    a = float(input("Ingresa el primer número: "))
    b = float(input("Ingresa el segundo número: "))

    if opcion == "1":
        resultado = a + b
        print("El resultado de la suma es: ", resultado)
    elif opcion == "2":
        resultado = a - b
        print("El resultado de la resta es: ", resultado)
    elif opcion == "3":
        resultado = a * b
        print("El resultado de la multiplicación es: ", resultado)
    elif opcion == "4":
        if b != 0:
            resultado = a / b
            print("El resultado de la división es: ", resultado)
        else:
            print("Error: No se puede dividir entre cero.")
    else:
        calculadora = False
        print("Input inválido. Saliendo de la calculadora...")
        break


    #
    #   Aqui se agrega las operacionse extra
    # 
    extra = input("¿Deseas realizar otra operación? (s/n): ").lower()

    while extra == "s":
        print("Ingresa que operación deseas realizar: ")
        print("1. Suma")
        print("2. Resta")
        print("3. Multiplicación")
        print("4. División")

        opcion = input("Opción: ")

        c = float(input("Ingresa el número: "))

        if opcion == "1":
            resultado = resultado + c
            print("El resultado de la suma es: ", resultado)
        elif opcion == "2":
            resultado = resultado - c
            print("El resultado de la resta es: ", resultado)
        elif opcion == "3":
            resultado = resultado * c
            print("El resultado de la multiplicación es: ", resultado)
        elif opcion == "4":
            if c != 0:
                resultado = resultado / c
                print("El resultado de la división es: ", resultado)
            else:
                print("Error: No se puede dividir entre cero.")
        else:
            calculadora = False
            print("Input inválido. Saliendo de la calculadora...")
            break

        extra = input("¿Deseas realizar otra operación? (s/n): ").lower()


