class Api::V1::ReviewsController < ApplicationController
    
    # def create
    #     # byebug
    #     review = Review.create(eater_id: params[:eater_id], truck_id: params[:truck_id], rating: params[:rating], body: params[:body])
    #     render json: review
    # end


    def create
        review = Review.new(eater_id: params[:eater_id], truck_id: params[:truck_id], rating: params[:rating], body: params[:body])
        if review.valid?
            review.save
            render json: review
        else
            render json: {error: "Rating must be whole number between 1 and 5"}
        end
    end
end
