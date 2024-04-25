FROM python:3.12.1-alpine3.19

LABEL mantainer="freitas.dev@proton.me"


WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1

ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["sh","./buildScript.sh"]