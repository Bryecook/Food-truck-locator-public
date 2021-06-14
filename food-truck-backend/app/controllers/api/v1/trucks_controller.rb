class Api::V1::TrucksController < ApplicationController
    # before_action :logged_in?
    def index
        trucks = Truck.all
        render json: trucks.to_json(:include => {reviews: {include: [:eater]}}, methods: :average_rating)
    end

    def show
        truck = find_by(id: params[:id])
        render json: truck
    end
end
