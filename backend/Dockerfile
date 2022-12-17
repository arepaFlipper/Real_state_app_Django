# syntax=docker/dockerfile:1
FROM python:3.7.3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
COPY ./backend/ /real/backend
# COPY ./backend/requirements.txt /abacus/backend/requirements
COPY .env /real/.env
WORKDIR /real/backend
RUN pip install --upgrade pip
RUN pip install django djangorestframework django-cors-headers djangorestframework-simplejwt Pillow psycopg2 psycopg2-binary
# RUN django-admin startproject real_state .
# RUN python ./manage.py startapp accounts
# RUN pip install -r /real/backend/requirements.txt
RUN chmod +x /real/backend/start.sh
