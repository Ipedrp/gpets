import requests
import time
import random
import json

# URL da API para a qual você quer enviar os dados
url = 'http://localhost:3000/api/localizacaoTempoReal'
# Dados que você quer enviar

contador = 0

# Enviando a requisição POST
while (contador < 100):
    dados = {
    
    "latitude": random.uniform(10.0, 70.0),
    "longitude": random.uniform(20.0, 80.0),
    "fk_pet": 1
}

    response = requests.post(url, json=dados)
      
    # Verificando a resposta
    if response.status_code == 200:
        print('Dados enviados com sucesso!')
        print('Resposta:', response.json())
    else:
        print('Falha ao enviar dados.')
        print('Código de status:', response.status_code)
        print('Resposta:', response.text)
    contador += 1 ;
    time.sleep(3);

