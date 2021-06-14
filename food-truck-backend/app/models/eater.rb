class Eater < ApplicationRecord
    has_secure_password
    has_many :favorites
    has_many :trucks, through: :favorites
    has_many :reviews
    validates :username, uniqueness: true
end
