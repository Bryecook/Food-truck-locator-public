class Api::V1::FavoritesController < ApplicationController

    def create
        favorite = Favorite.create(eater_id: params[:eater_id], truck_id: params[:truck_id])
        render json: favorite
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        render json: favorite
    end
    
end
