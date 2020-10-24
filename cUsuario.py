#!/usr/bin/python3
import mysql.connector
from mysql.connector import errorcode
import cgi

data = cgi.FieldStorage()

nombre = data.getvalue('nombre')
apellido = data.getvalue('apellido')
password = data.getvalue('con')
passwordf = data.getvalue('conf')
direccion = data.getvalue('dire')


try:
    cnx = mysql.connector.connect(
        user='Caceres', password='s28Nor04+', database='baseProyecto', host='127.0.0.1')
except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Something is wrong with your user name or password")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Database does not exist")
    else:
        print(err)
else:
    cur = cnx.cursor()
    print('Content-Type: text/html')
    print('')
    sql = ("insert into CLIENTES values ('{}','{}',SHA('{}'),'{}')".format(nombre,apellido, password,direccion))
    cur.execute(sql)
    cnx.commit()
    print('<h1> Bienvenido {} </h1>'.format(nombre))
cnx.close()