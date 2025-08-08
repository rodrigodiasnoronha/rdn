---
titulo: FastAPI - Introdução e Primeiro Endpoint
descricao: Aprenda a configurar o ambiente FastAPI e criar seu primeiro endpoint de forma simples e prática
autor: Rodrigo Dias Noronha
slug: fastapi-introducao-primeiro-endpoint
data: Fri Aug 08 2024 13:21:00 GMT-0300 (GMT-03:00)
twitter: xxxkckkxkxxk
autorEmail: rodrigodnoronha@gmail.com
autorFoto: https://avatars.githubusercontent.com/u/63525765?v=4
---

O FastAPI é um dos frameworks mais modernos e rápidos para desenvolvimento de APIs em Python. Combinando alta performance, tipagem automática e documentação automática, ele se tornou uma escolha popular entre desenvolvedores. Neste guia, vamos explorar como configurar o ambiente e criar seu primeiro endpoint.

### O que é o FastAPI?

O FastAPI é um framework web moderno para Python baseado em type hints padrão do Python 3.6+. Ele foi construído sobre Starlette e Pydantic, oferecendo:

- **Performance**: Uma das APIs mais rápidas disponíveis, comparável ao NodeJS e Go
- **Documentação Automática**: Gera automaticamente documentação interativa (Swagger/OpenAPI)
- **Validação Automática**: Validação de dados baseada em type hints
- **Editor Support**: Excelente suporte em editores como VS Code e PyCharm

### Configuração do Ambiente

#### 1. Pré-requisitos

Antes de começar, certifique-se de ter Python 3.7+ instalado:

```bash
python --version
# Python 3.8.0 ou superior
```

#### 2. Criando um Ambiente Virtual

É uma boa prática usar ambientes virtuais para isolar as dependências:

```bash
# Criar o ambiente virtual
python -m venv fastapi-env

# Ativar o ambiente (Windows)
fastapi-env\Scripts\activate

# Ativar o ambiente (Linux/Mac)
source fastapi-env/bin/activate
```

#### 3. Instalando o FastAPI

Com o ambiente virtual ativado, instale o FastAPI e o servidor ASGI:

```bash
pip install fastapi uvicorn
```

#### 4. Verificando a Instalação

Crie um arquivo `main.py` para testar:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
```

Execute o servidor:

```bash
uvicorn main:app --reload
```

Acesse `http://localhost:8000` e você verá: `{"Hello": "World"}`

### Criando o Primeiro Endpoint

#### 1. Estrutura Básica

Vamos criar uma API simples para gerenciar uma lista de tarefas:

```python
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="API de Tarefas", version="1.0.0")

# Modelo de dados
class Tarefa(BaseModel):
    id: Optional[int] = None
    titulo: str
    descricao: Optional[str] = None
    concluida: bool = False

# Lista em memória para armazenar as tarefas
tarefas = []
contador_id = 1
```

#### 2. Endpoint GET - Listar Tarefas

```python
@app.get("/tarefas", response_model=List[Tarefa])
def listar_tarefas():
    """
    Retorna todas as tarefas cadastradas
    """
    return tarefas
```

#### 3. Endpoint POST - Criar Tarefa

```python
@app.post("/tarefas", response_model=Tarefa)
def criar_tarefa(tarefa: Tarefa):
    """
    Cria uma nova tarefa
    """
    global contador_id
    
    tarefa.id = contador_id
    contador_id += 1
    
    tarefas.append(tarefa)
    return tarefa
```

#### 4. Endpoint GET - Buscar Tarefa por ID

```python
@app.get("/tarefas/{tarefa_id}", response_model=Tarefa)
def buscar_tarefa(tarefa_id: int):
    """
    Busca uma tarefa específica pelo ID
    """
    for tarefa in tarefas:
        if tarefa.id == tarefa_id:
            return tarefa
    
    return {"error": "Tarefa não encontrada"}
```

#### 5. Endpoint PUT - Atualizar Tarefa

```python
@app.put("/tarefas/{tarefa_id}", response_model=Tarefa)
def atualizar_tarefa(tarefa_id: int, tarefa_atualizada: Tarefa):
    """
    Atualiza uma tarefa existente
    """
    for i, tarefa in enumerate(tarefas):
        if tarefa.id == tarefa_id:
            tarefa_atualizada.id = tarefa_id
            tarefas[i] = tarefa_atualizada
            return tarefa_atualizada
    
    return {"error": "Tarefa não encontrada"}
```

#### 6. Endpoint DELETE - Remover Tarefa

```python
@app.delete("/tarefas/{tarefa_id}")
def remover_tarefa(tarefa_id: int):
    """
    Remove uma tarefa pelo ID
    """
    for i, tarefa in enumerate(tarefas):
        if tarefa.id == tarefa_id:
            tarefas.pop(i)
            return {"message": "Tarefa removida com sucesso"}
    
    return {"error": "Tarefa não encontrada"}
```

### Código Completo

Aqui está o arquivo `main.py` completo:

```python
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="API de Tarefas", version="1.0.0")

# Modelo de dados
class Tarefa(BaseModel):
    id: Optional[int] = None
    titulo: str
    descricao: Optional[str] = None
    concluida: bool = False

# Lista em memória para armazenar as tarefas
tarefas = []
contador_id = 1

@app.get("/")
def read_root():
    return {"message": "API de Tarefas - FastAPI"}

@app.get("/tarefas", response_model=List[Tarefa])
def listar_tarefas():
    """
    Retorna todas as tarefas cadastradas
    """
    return tarefas

@app.post("/tarefas", response_model=Tarefa)
def criar_tarefa(tarefa: Tarefa):
    """
    Cria uma nova tarefa
    """
    global contador_id
    
    tarefa.id = contador_id
    contador_id += 1
    
    tarefas.append(tarefa)
    return tarefa

@app.get("/tarefas/{tarefa_id}", response_model=Tarefa)
def buscar_tarefa(tarefa_id: int):
    """
    Busca uma tarefa específica pelo ID
    """
    for tarefa in tarefas:
        if tarefa.id == tarefa_id:
            return tarefa
    
    return {"error": "Tarefa não encontrada"}

@app.put("/tarefas/{tarefa_id}", response_model=Tarefa)
def atualizar_tarefa(tarefa_id: int, tarefa_atualizada: Tarefa):
    """
    Atualiza uma tarefa existente
    """
    for i, tarefa in enumerate(tarefas):
        if tarefa.id == tarefa_id:
            tarefa_atualizada.id = tarefa_id
            tarefas[i] = tarefa_atualizada
            return tarefa_atualizada
    
    return {"error": "Tarefa não encontrada"}

@app.delete("/tarefas/{tarefa_id}")
def remover_tarefa(tarefa_id: int):
    """
    Remove uma tarefa pelo ID
    """
    for i, tarefa in enumerate(tarefas):
        if tarefa.id == tarefa_id:
            tarefas.pop(i)
            return {"message": "Tarefa removida com sucesso"}
    
    return {"error": "Tarefa não encontrada"}
```

### Testando a API

#### 1. Executar o Servidor

```bash
uvicorn main:app --reload
```

#### 2. Acessar a Documentação

O FastAPI gera automaticamente documentação interativa:

- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

#### 3. Exemplos de Uso

**Criar uma tarefa:**
```bash
curl -X POST "http://localhost:8000/tarefas" \
     -H "Content-Type: application/json" \
     -d '{"titulo": "Estudar FastAPI", "descricao": "Aprender os conceitos básicos"}'
```

**Listar tarefas:**
```bash
curl "http://localhost:8000/tarefas"
```

**Buscar tarefa específica:**
```bash
curl "http://localhost:8000/tarefas/1"
```

### Vantagens do FastAPI

1. **Performance**: Extremamente rápido, comparável ao NodeJS
2. **Type Safety**: Validação automática de tipos
3. **Documentação Automática**: Swagger/OpenAPI gerado automaticamente
4. **Async/Await**: Suporte nativo para operações assíncronas
5. **Editor Support**: Excelente autocomplete e validação em tempo real

### Próximos Passos

- Implementar autenticação e autorização
- Conectar com banco de dados (SQLAlchemy)
- Adicionar validações customizadas
- Implementar testes automatizados
- Configurar CORS para frontend
- Deploy em produção

### Conclusão

O FastAPI oferece uma experiência de desenvolvimento moderna e eficiente. Com sua documentação automática, validação de tipos e alta performance, é uma excelente escolha para APIs Python.

A combinação de simplicidade e poder torna o FastAPI ideal tanto para projetos pequenos quanto para aplicações em larga escala. A documentação automática é especialmente útil para equipes de desenvolvimento e integração com frontend.

Experimente criar seus próprios endpoints e explore as funcionalidades avançadas do framework!
