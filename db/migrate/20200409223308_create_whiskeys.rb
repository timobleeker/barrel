class CreateWhiskeys < ActiveRecord::Migration[6.0]
  def change
    create_table :whiskeys do |t|
      t.text :name, unique: true
      t.text :description

      t.timestamps
    end
  end
end
