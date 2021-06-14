class Api::V1::EatersController < ApplicationController
    # skip_before_action :authorized, only: :create

    def create
        # byebug
        eater = Eater.new(eater_params)
        if eater.valid?
            eater.save
            render json: eater
        else
            render json: {error: "Username already in use"}
        end
    end 

    # def index
    #     eaters = Eater.all
    #     render json: eaters
    # end

    private
    def eater_params
        # debugger
        params.permit(:username, :password)
    end
end
