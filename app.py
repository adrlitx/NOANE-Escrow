from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from web3 import Web3

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://rnogplee:V5NvLWZD-BAvCnC5kVKygQ8BdDaCbU8O@heffalump.db.elephantsql.com:5432/rnogplee'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
w3 = Web3(Web3.HTTPProvider('https://eth-goerli.g.alchemy.com/v2/SPUpGBNTOpD8LP_bGg2lnt9fdYcMf9ke'))

@app.route('/')
def index():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)