import os
from flask import Flask, render_template, redirect, request, url_for, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)
app.config["MONGO_DBNAME"] = "jargon-dictionary"
app.config["MONGO_URI"] = os.getenv("JARGON_URI")

mongo = PyMongo(app)


# Index
@app.route('/')
def get_decks():
    return render_template('index.html', categories=mongo.db.category.find())

# Dynamic URLs for getting definitions based on category
@app.route('/get_definitions/<category>')
def get_definitions(category):
    return render_template("definitions.html", definitions=mongo.db.jargon.find({"category": category}))


@app.route('/add_definition')
def add_definition():
    categories = mongo.db.category.find()
    return render_template('add-definition.html',  categories=categories)


@app.route('/insert_definition', methods=['POST'])
def insert_definition():
    definitions = mongo.db.jargon
    definitions.insert(request.form.to_dict())
    return redirect(url_for('get_decks'))


@app.route('/edit_definition/<definition_id>')
def edit_definition(definition_id):
    definition = mongo.db.jargon.find_one({"_id": ObjectId(definition_id)})
    categories = mongo.db.category.find()
    return render_template('edit-definition.html', definition=definition, categories=categories)


@app.route('/update_definition/<definition_id>', methods=["POST"])
def update_definition(definition_id):
    definitions = mongo.db.jargon
    definitions.update({'_id': ObjectId(definition_id)},
                       {
        'word': request.form.get('word'),
        'definition': request.form.get('definition'),
        'category': request.form.get('category')
    })
    return redirect(url_for('get_decks'))


@app.route('/delete_definition/<definition_id>')
def delete_definition(definition_id):
    mongo.db.jargon.remove({"_id": ObjectId(definition_id)})
    return redirect(url_for('get_decks'))

# DEFINITIONS ENDS HERE

# DECK STARTS HERE
@app.route('/add_deck')
def add_deck():
    return render_template('add-deck.html')


@app.route('/insert_deck', methods=['POST'])
def insert_deck():
    decks = mongo.db.category
    decks.insert(request.form.to_dict())
    return redirect(url_for('get_decks'))


@app.route('/edit_deck/<deck_id>')
def edit_deck(deck_id):
    deck_id = mongo.db.category.find_one({"_id": ObjectId(deck_id)})
    print(deck_id)
    return render_template('edit-deck.html', deck=deck_id)


@app.route('/update_deck/<deck_id>', methods=["POST"])
def update_deck(deck_id):
    decks = mongo.db.category
    decks.update({'_id': ObjectId(deck_id)},
                 {
        'name': request.form.get('name'),
        'description': request.form.get('description')
    })
    return redirect(url_for('get_decks'))


# run the app.
if __name__ == "__main__":
    # Setting debug to below enables debug output. This line should be removed before deploying a production app.
    app.debug = True
    app.run()
