require 'rails_helper'

RSpec.describe Whiskey, type: :model do

  it 'requires a name' do
    whiskey = Whiskey.new
    expect(whiskey).not_to be_valid
    expect(whiskey.errors).to include :name
  end

  it 'has a valid factory' do
    expect(create :whiskey).to be_valid
  end

end
