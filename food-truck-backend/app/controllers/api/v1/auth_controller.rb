class Api::V1::AuthController < ApplicationController

    def login
        eater = Eater.find_by(username: auth_param[:username])
        if eater && eater.authenticate(auth_param[:password])
           render json: {eater: eater.to_json(include: [{favorites: {include: [:truck]}}, :trucks, :reviews]), token: JWT.encode({eater_id: eater.id}, "Test")}
        else
            render json: {error: "Incorrect username or password"}
        end
    end

    def auth_param
        params.require(:auth).permit(:username, :password)
    end 


    def token
        # byebug
        header = request.headers["Authorization"]
        token = header.split(" ")[1]
        eater_id = JWT.decode(token, "Test")[0]["eater_id"]
        eater = Eater.find(eater_id)
        render json: eater.to_json(include: [{favorites: {include: [:truck]}}, :trucks, :reviews])
    end

end
