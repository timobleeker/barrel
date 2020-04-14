class AddRatingsToWhiskey < ActiveRecord::Migration[6.0]
  def change
    add_column :whiskeys, :taste, :integer
    add_column :whiskeys, :color, :integer
    add_column :whiskeys, :smokiness, :integer
  end
end
