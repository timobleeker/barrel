require 'rails_helper'

RSpec.describe Whiskey, type: :model do

  it 'requires a name and ratings' do
    whiskey = Whiskey.new
    expect(whiskey).not_to be_valid
    expect(whiskey.errors).to include :name, :taste, :color, :smokiness
  end

  shared_examples 'ratings' do |rating|

    it 'has an lower bound' do
      whiskey = build :whiskey
      whiskey[rating] = 0
      expect(whiskey).not_to be_valid
      expect(whiskey.errors).to include rating
    end

    it 'is valid within range' do
      whiskey = build :whiskey
      whiskey[rating] = (1..5).to_a.sample
      expect(whiskey).to be_valid
    end

    it 'has an upper bound' do
      whiskey = build :whiskey
      whiskey[rating] = 6
      expect(whiskey).not_to be_valid
      expect(whiskey.errors).to include rating
    end
  end

  [:taste, :color, :smokiness].each do |rating|
    include_examples 'ratings', rating
  end

  it 'has a valid factory' do
    expect(create :whiskey).to be_valid
  end

end
