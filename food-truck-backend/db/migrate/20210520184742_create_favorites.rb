class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.integer :eater_id
      t.integer :truck_id

      t.timestamps
    end
  end
end