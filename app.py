import os
from flask import Flask, render_template, redirect, request, url_for, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)
app.config["MONGO_DBNAME"] = "jargon-dictionary"
app.config["MONGO_URI"] = os.getenv("JARGON_URI")

mongo = PyMongo(app)

@app.route('/add-definintion.html')
def add_definition():
    return render_template('add-definition.html')


@app.route('/insert_definition', methods=['POST'])
def insert_definition():
    definitions = mongo.db.jargon
    definitions.insert(request.form.to_dict())
    return redirect(url_for('get_defintions'))


# run the app.
if __name__ == "__main__":
    # Setting debug to below enables debug output. This line should be removed before deploying a production app.
    app.debug = True
    app.run()
