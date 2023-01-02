"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token #añadido

api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def login():
    data = request.json

    user = User.query.filter_by(username=data['username'], email=data['email'], password=data['password']).first()
    if user:
        token = create_access_token(identity=user.id)
        #return jsonify(data), 200 devuelve el dato
        return jsonify(token), 200
    
    return jsonify({"message": "Usuario/contraseña incorrecta"}), 400
