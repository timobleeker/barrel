class Whiskey < ApplicationRecord
  validates_presence_of :name, :taste, :color, :smokiness
  validates_uniqueness_of :name
  validates_inclusion_of :taste, :color, :smokiness, in: 1..5, message: "is out of range 1 to 5"
end
