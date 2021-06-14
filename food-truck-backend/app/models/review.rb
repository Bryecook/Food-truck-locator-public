class Review < ApplicationRecord
    belongs_to :eater
    belongs_to :truck
    validates :rating, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }

    def self.average_rating
        ratings = Review.all.map{|review| review.rating}
        average = ratings.sum/ratings.size
    end
end
