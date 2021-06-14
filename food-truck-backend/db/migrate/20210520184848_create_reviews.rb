class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :eater_id
      t.integer :truck_id
      t.integer :rating
      t.string :body

      t.timestamps
    end
  end
end
