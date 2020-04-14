class AddNotNullConstraintToName < ActiveRecord::Migration[6.0]
  def change
    change_column_null :whiskeys, :name, false
  end
end
