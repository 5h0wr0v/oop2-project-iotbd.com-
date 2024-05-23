from flask import Flask
from flask import request
from flask_cors import CORS
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="iotbd"
)


'''
insert


'''


app = Flask(__name__)
CORS(app)

items = [
        {
            "image":"./assets/img",
            "title":"arduino uno",
            "description":"aldfj al;sjdf ",
            "price":"930"
        },
        {
            "image":"./assets/img",
            "title":"arduino nano",
            "description":"aldfj al;sjdf ",
            "price":"430"
        }
    ]

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/login",methods=["POST"])
def login():
    return "user login"

@app.route("/products", methods=["GET"])
def getProduct():
    queryCursor = mydb.cursor()
    queryCursor.execute("SELECT * FROM product")
    productData = queryCursor.fetchall()
    return productData

@app.route("/addproduct",methods = ['POST'])
def addToCart():
    if request.method == "POST":
        image = request.form['product_image']
        title = request.form['product_title']
        description = request.form['product_description']
        price = request.form['product_price']
        
        queryCursor = mydb.cursor()
        sql = "INSERT INTO product(image, product_name, product_description, product_price) VALUES (%s, %s, %s, %s, %s)"
        val = ("h.jpg","test" , "test","124")
        print(type(val))
        queryCursor.execute(sql, val)
        mydb.commit()
        if queryCursor.rowcount:
            return "Product succesfully added" 
        else:
            return "Something went wrong..."


@app.route("/payment/:id")
def payment():
    return "payment route"

if __name__ == '__main__':
    app.run(debug=True)