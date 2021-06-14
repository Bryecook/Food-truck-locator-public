class Favorite < ApplicationRecord
    belongs_to :truck
    belongs_to :eater
end
