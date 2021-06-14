class Truck < ApplicationRecord
    serialize :location, JSON
    has_many :favorites
    has_many :eaters, through: :favorites
    has_many :reviews

    def create_slug
        return self.name.parameterize
    end
    
    def average_rating
        ratings = self.reviews.map{|review| review.rating}
        if ratings.size > 0
            average_rating = ratings.sum/ratings.size
        else
            average_rating = "No ratings"
        end
    end

    private

    def assign_slug
        self.slug = create_slug
    end
end
