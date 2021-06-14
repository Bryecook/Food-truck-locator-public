class CreateTrucks < ActiveRecord::Migration[6.1]
  def change
    create_table :trucks do |t|
      t.string :name
      t.string :location
      t.string :type_of_food
      t.string :profile_picture
      t.string :hours_of_operation

      t.timestamps
    end
  end
end
