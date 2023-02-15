"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
#añadido para hacer el login
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity 

api = Blueprint('api', __name__)


#POST PARA REGISTRARSE
@api.route('/users', methods=['POST'])
def register_user():
    try:
        data = request.json
        user = User(username=data["username"], email=data["email"], password=data["password"])
        db.session.add(user)
        db.session.commit()
    except Exception as e:
        print (e)
        return jsonify({"message": "No se pudo registrar"}), 400
    return jsonify({"message": "Usuario registrado"}), 200

#POST PARA LOGIN
@api.route('/login', methods=['POST'])
def login():
    data = request.json
    
    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    if user:
        token = create_access_token(identity=user.id )
        return jsonify({"access_token": token}), 200
    
    return jsonify({"message": "Email/contraseña incorrecta"}), 400

#GET RESTRINGIDO DEL USUARIO
@api.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    return jsonify(user.serialize()), 200
