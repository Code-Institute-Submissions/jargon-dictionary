import os
from flask import Flask, render_template, redirect, request, url_for, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)
app.config["MONGO_DBNAME"] = "jargon-dictionary"
app.config["MONGO_URI"] = os.getenv("JARGON_URI")

mongo = PyMongo(app)


@app.route('/')
def get_definitions():
    return render_template("definitions.html", definitions=mongo.db.jargon.find())


@app.route('/add_definition')
def add_definition():
    return render_template('add-definition.html')


@app.route('/insert_definition', methods=['POST'])
def insert_definition():
    definitions = mongo.db.jargon
    definitions.insert(request.form.to_dict())
    return redirect(url_for('get_definitions'))


@app.route('/edit_definition/<definition_id>')
def edit_definition(definition_id):
    definition = mongo.db.jargon.find_one({"_id": ObjectId(definition_id)})
    return render_template('edit-definition.html', definition=definition)


@app.route('/delete_definition/<definition_id>')
def delete_definition(definition_id):
    mongo.db.jargon.remove({"_id": ObjectId(definition_id)})
    return redirect(url_for('get_definitions'))


@app.route('/update_definition/<definition_id>', methods=["POST"])
def update_definition(definition_id):
    definitions = mongo.db.jargon

    definitions.update({'_id': ObjectId(definition_id)},
                       {
        'word': request.form.get('word'),
        'definition': request.form.get('definition'),
    })
    return redirect(url_for('get_definitions'))


# run the app.
if __name__ == "__main__":
    # Setting debug to below enables debug output. This line should be removed before deploying a production app.
    app.debug = True
    app.run()
